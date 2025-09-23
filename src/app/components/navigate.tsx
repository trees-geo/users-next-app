"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const Navigation=()=>{
    const path = usePathname()
return(
    <nav className="flex gap-6 py-2 justify-center">
      <Link href="/" className={path==="/"? "hover:underline font-bold mr-4": "hover:underline text-blue-500 mr-4"}>Home</Link>
      <Link href="/blog" className={path==="/blog"? "hover:underline font-bold mr-4": "hover:underline text-blue-500 mr-4"}>Blog</Link>
      <Link href="/books" className={path==="/books"? "hover:underline font-bold mr-4": "hover:underline text-blue-500 mr-4"}>Books</Link>
    </nav>
)
}