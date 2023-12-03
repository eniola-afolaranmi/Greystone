import type { Metadata } from "next";
import RootStyleRegistry from "./emotion";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/backgroundImage";

// These styles apply to every route in the application
import "./globals.css";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Sensei Notes",
  description: "Created by Byron Corbett and Eniola Afolaranmi with Nextjs, Mantine, and Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-US"
      className="h-full"
    >
      <head></head>
      <body
        className="h-full"
        suppressHydrationWarning
      >
        <RootStyleRegistry>
          <div className="NavbarDiv relative h-52">
            <BackgroundImage
              src="/cn-gray.svg"
              alt="navbar gray background image"
            />
            <BackgroundImage
              src="/cn-blue.svg"
              alt="navbar blue background image"
            />
            <Navbar />
          </div>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
