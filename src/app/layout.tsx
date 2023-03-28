import { Inter } from "next/font/google";
import clsx from "clsx";

import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Project Management",
  description: "A fullstack personal project with Nextjs 13 to study purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.className, inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
