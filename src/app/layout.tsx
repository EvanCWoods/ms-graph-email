import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Footer from "~/app/components/core/footer";
import Header from "~/app/components/core/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Good Change",
  description:
    "GoodChange is a platform for positive change. A charity that helps you find the right place to donate, and makes it easy to give.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

/**
 * Renders the root layout of the application.
 *
 * @param {React.ReactNode} children - The content to be rendered within the layout.
 * @returns {React.ReactNode} - The rendered root layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex min-h-screen flex-col font-sans ${inter.variable}`}
        >
          <div>
            <Header />
            <div>{children}</div>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
