import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { repositoryRouter } from "./routers/repository";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  repository: repositoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
