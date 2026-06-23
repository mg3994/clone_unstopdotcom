import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import MobileBottomMenu from "@/components/layout/MobileBottomMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internships | Jobs | Competitions | Hackathons | Courses - Unstop",
  description: "Your one stop career platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden bg-workspace">
          <Sidebar />
          <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden relative">
            <TopBar />
            <main id="app-main-container" className="flex-1 overflow-y-auto bg-white">
              {children}
            </main>
            <MobileBottomMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
