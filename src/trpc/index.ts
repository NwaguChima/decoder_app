import { publicProcedure, router } from './trpc';

export const appRouter = router({});

// Export type router type signature.
// Not the router itself.
export type AppRouter = typeof appRouter;
