import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const repositoryRouter = createTRPCRouter({
  addRepo: publicProcedure
    .input(z.object({ owner: z.string(), repository: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { owner, repository } = input;

      if (!owner || !repository) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Owner or Repository cannot be empty",
        });
      }

      try {
        let addedOwner = await ctx.prisma.owner.findUnique({
          where: {
            name: owner,
          },
        });

        if (!addedOwner) {
          addedOwner = await ctx.prisma.owner.create({
            data: {
              name: owner,
            },
          });
        }

        const newRepository = await ctx.prisma.repository.create({
          data: {
            name: repository,
            owner: {
              connect: {
                id: addedOwner.id,
              },
            },
          },
        });

        const existingUser = await ctx.prisma.user.findUnique({
          where: {
            id: ctx.session?.user?.id,
          },
        });

        if (existingUser) {
          const addedOwnerUser = await ctx.prisma.ownerUser.findFirst({
            where: {
              ownerId: addedOwner.id,
              userId: existingUser.id,
            },
          });

          if (!addedOwnerUser) {
            await ctx.prisma.ownerUser.create({
              data: {
                owner: {
                  connect: {
                    id: addedOwner.id,
                  },
                },
                user: {
                  connect: {
                    id: existingUser.id,
                  },
                },
              },
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    // if (!ctx.session?.user?.id) {
    //   throw new TRPCError({
    //     code: "BAD_REQUEST",
    //     message: "User not logged in",
    //   });
    // }

    const result = await ctx.prisma.ownerUser.findMany({
      where: {
        userId: ctx.session?.user?.id,
      },
      select: {
        owner: {
          include: {
            repositories: true,
          },
        },
      },
    });

    return result;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
