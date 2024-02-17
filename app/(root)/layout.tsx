import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topbar/topbar";
import BottomBar from "@/components/bottombar/bottombar";
import CreateModal from "@/components/modal/modal";

const roboto = Open_Sans({ subsets: ["latin"], weight : "500" });

export const metadata: Metadata = {
  title: "Threads",
  description: "this is Threads clone builded with next js by MasoudYousefi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <CreateModal/>
        <TopBar />
        {children}
        <BottomBar />
        </body>
    </html>
  );
}
