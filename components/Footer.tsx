import Link from "next/link";
import { Chrome } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-screen-2xl px-4 md:px-6 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Chrome className="h-6 w-6 text-[#9945FF]" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built for the Solana Hackathon. Powered by{" "}
            <Link
              href="https://solana.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Solana
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://x.com/amitsaini_144"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/amitsaini144/solana-quest"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          <Link
            href="https://discord.gg/solana"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            Discord
          </Link>
        </div>
      </div>
    </footer>
  );
}