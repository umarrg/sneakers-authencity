import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Explore } from "@/components/explore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Explore />
    </main>
  );
}
