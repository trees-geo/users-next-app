"use client"
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  return (
    <>
      <div className="text-2xl">MY BLOG</div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </>
  );
}
