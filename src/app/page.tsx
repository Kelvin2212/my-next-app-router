import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home",
  description: "Aplikasi untuk belajar Next Js",
  authors: [{ name: "Kelvin Samuel", url: "http://localhost:3000" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Home",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
