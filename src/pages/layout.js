import { Inter } from "next/font/google";
// import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Gadiel Aaron Gerez Portfolio",
  description: "Created with Next.js",
  icons: {
    icon: "./favicon-32x32.png",
    apple: "./apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Root Layout</title>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
