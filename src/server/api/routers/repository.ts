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
      } catch (error) {
        console.log(error);
      }
    }),

  // getRepositorys: protectedProcedure.query(async ({ ctx }) => {

  // }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
