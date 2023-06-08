import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Tree",
  description: "A simple app to demonstrate the skills of a frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-300 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
