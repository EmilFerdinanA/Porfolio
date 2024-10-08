import HomeBtn from "@/components/HomeBtn";
import React from "react";

export default function SubPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <HomeBtn />
      {children}
    </main>
  );
}
