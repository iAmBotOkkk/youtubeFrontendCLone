import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Card } from "@/Components/card";
import Videogrid from "@/Components/videogrid";
import Appbar from "@/Components/Appbar";
import { Sidebar } from "@/Components/sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <div>
    <Appbar/>
    <div className="flex">
    <Sidebar/>
   <Videogrid/>  
   </div>
   </div>
  )
}
