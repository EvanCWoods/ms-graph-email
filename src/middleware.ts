/* eslint-disable @typescript-eslint/no-unsafe-call */
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/login",
    "/register",
    "/about",
    "/test",
    "/api/clerk",
    "/favicon.ico",
    "/api/stripe",
    "/api/test",
  ],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
