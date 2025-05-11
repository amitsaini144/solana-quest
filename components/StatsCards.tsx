import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { 
    Trophy, 
    CheckCircle2, 
    Hourglass, 
    Coins 
  } from "lucide-react";
  
  export function StatsCards() {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
        <Card className="border-border/50 bg-card/95 backdrop-blur-sm transition-all hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
            <Coins className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.65 SOL</div>
            <p className="text-xs text-muted-foreground">+30 QUEST</p>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/95 backdrop-blur-sm transition-all hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">33% completion rate</p>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/95 backdrop-blur-sm transition-all hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Hourglass className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Est. wait: 24h</p>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-card/95 backdrop-blur-sm transition-all hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Up to 1.65 SOL</p>
          </CardContent>
        </Card>
      </div>
    );
  }