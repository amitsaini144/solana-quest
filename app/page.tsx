import { HeroSection } from "@/components/HeroSection";
import { StatsCards } from "@/components/StatsCards";
import { TaskList } from "@/components/TaskList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <section className="container py-8 md:py-12 lg:py-16 mx-auto">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Your Quest Dashboard
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Track your progress, view available tasks, and redeem rewards all in one place.
            </p>
          </div>
          <div className="mx-auto max-w-[1200px] mt-8">
            <StatsCards />
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-16 mx-auto">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Available Tasks
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Complete these tasks to earn SOL and other rewards.
            </p>
          </div>
          <div className="mx-auto max-w-[1200px] mt-8">
            <TaskList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
