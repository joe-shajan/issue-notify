import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const repositoryRouter = createTRPCRouter({
  addRepo: protectedProcedure
    .input(z.object({ owner: z.string(), repository: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log("in server mutation");
      // console.log(ctx.prisma);
      console.log(ctx.session?.user?.email);
      // console.log(ctx.session);
      console.log(input);
      const { owner, repository } = input;
      // console.log(input.owner);

      try {
        const newOwner = await ctx.prisma.owner.create({
          data: {
            name: owner,
          },
        });

        const newRepository = await ctx.prisma.repository.create({
          data: {
            name: repository,
            owner: {
              connect: {
                id: newOwner.id,
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
                  id: newOwner.id,
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

        console.log(newOwner);
        console.log(newRepository);
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

// // Insert an Owner
// const newOwner = await prisma.owner.create({
//   data: {
//     name: "John Doe",
//     repositories: {
//       create: {
//         name: "Project A"
//       }
//     }
//   }
// });

// // Insert a Repository
// const newRepository = await prisma.repository.create({
//   data: {
//     name: "Project B",
//     owners: {
//       create: {
//         name: "Jane Smith"
//       }
//     }
//   }
// });

// // Insert a User
// const newUser = await prisma.user.create({
//   data: {
//     name: "Alice Johnson",
//     ownerRepository: {
//       connect: {
//         id: 1 // Connect to an existing OwnerRepository record
//       }
//     }
//   }
// });
