import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      
      <div className="w-full max-w-screen-2xl relative mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Complete Tasks.
              <br />
              <span className="text-[hsl(267,100%,63.5%)]">Earn Rewards.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join the Solana ecosystem by completing tasks and earning rewards. Connect your wallet to get started.
            </p>
            {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button variant="outline" className="group">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div> */}
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary/50 backdrop-blur">
              <Image
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
                alt="Solana Visualization"
                fill
                className="object-cover transition-transform hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Start Earning Today</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect your wallet and complete your first task in minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}