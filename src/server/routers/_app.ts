import { router } from "../trpc";
import { departmentRouter } from "./department";

export const appRouter = router({
  department: departmentRouter,
});

export type AppRouter = typeof appRouter;
