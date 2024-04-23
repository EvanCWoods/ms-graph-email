/* eslint-disable @typescript-eslint/no-unsafe-call */
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/register",
    "/api/clerk",
    "/favicon.ico",
    "/api/stripe",
  ],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
