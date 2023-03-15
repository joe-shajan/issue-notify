import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const repositoryRouter = createTRPCRouter({
  addRepo: publicProcedure
    .input(z.object({ owner: z.string(), repository: z.string() }))
    .mutation(({ ctx, input }) => {
      console.log("in server mutation");
      // console.log(ctx.prisma);
      // console.log(ctx.session);
      // console.log(ctx.session);
      console.log(input);
      // console.log(input.owner);

      // try {
      //   await ctx.prisma.guestbook.create({
      //     data: {
      //       name: input.name,
      //       message: input.message,
      //     },
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

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
