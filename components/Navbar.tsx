"use client"
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Chrome } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-screen-2xl mx-auto flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Chrome className="h-5 w-5 text-[hsl(267,100%,63.5%)]" />
            <span className="hidden font-medium sm:inline-block">
              SolanaQuest
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {!isClient ? <p className="text-white pr-10 pt-2">Loading...</p> : <WalletMultiButton />}
          </nav>
        </div>
      </div>
    </header>
  );
}