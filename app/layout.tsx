import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Announcement from "@/components/sharedUi/Announcement";
import { SidebarProvider, } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import 'swiper/css';
import "./globals.css";
import SidebarWithInset from "@/components/SidebarWithInset";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hype3 | Digital Collectibles",
  description: "Collect, trade, and showcase digital sports cards powered by Hype3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} antialiased bg-dark`}
      >
        <Announcement />
        <SidebarProvider>
          <AppSidebar />
          <SidebarWithInset>{children}</SidebarWithInset>
        </SidebarProvider>
      </body>
    </html>
  );
}


