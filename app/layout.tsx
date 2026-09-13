import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagar Studio | Wedding Photography & Cinematic Films",
  description: "Wedding photography, cinematic films, portraits and 4K aerial storytelling from Hyderabad.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
