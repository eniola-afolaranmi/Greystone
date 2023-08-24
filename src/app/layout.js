import './globals.css'
import { Inter } from 'next/font/google'
import RootStyleRegistry from "./emotion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CN Westshore progress tracking",
  description: "Created by Byron Corbett and Eniola Afolaranmi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={inter.className}
      >
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
