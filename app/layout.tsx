import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cryptracka",
  description: "Monitor all your favorites cryptocurrencies in one place",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
