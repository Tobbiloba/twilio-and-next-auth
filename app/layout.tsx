"use client";

// import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from "@/utils/protected-route";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />

        <SessionProvider>
        <ProtectedRoute>
            {children}
           </ProtectedRoute>
           </SessionProvider>
      </body>
    </html>
  );
}
