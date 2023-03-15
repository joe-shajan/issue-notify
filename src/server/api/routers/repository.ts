import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const repositoryRouter = createTRPCRouter({
  addRepo: publicProcedure
    .input(z.object({ owner: z.string(), repo: z.string() }))
    .mutation(({ ctx, input }) => {
      console.log(ctx.session);
      console.log(input.repo);
      console.log(input.owner);

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
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
