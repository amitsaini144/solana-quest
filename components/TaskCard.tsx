"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Trophy
} from "lucide-react";

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  reward: {
    amount: number;
    token: string;
  };
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: string;
  type: string;
  completed?: boolean;
  verified?: boolean;
  deadline?: string;
  link?: string;
}

export function TaskCard({ task }: { task: TaskProps }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handle, setHandle] = useState("");
  const [submitted, setSubmitted] = useState(task.completed || false);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20';
      case 'Hard': return 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20';
      default: return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch(platform.toLowerCase()) {
      case 'twitter': return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
      case 'discord': return 'bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20';
      case 'github': return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
      default: return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
    }
  };

  const getStatusColor = () => {
    if (task.verified) return 'bg-emerald-500/10 text-emerald-500';
    if (submitted) return 'bg-amber-500/10 text-amber-500';
    return 'bg-secondary text-secondary-foreground';
  };

  const getStatusText = () => {
    if (task.verified) return 'Verified';
    if (submitted) return 'Pending';
    return 'Not Started';
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/95 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={getDifficultyColor(task.difficulty)}>
            {task.difficulty}
          </Badge>
          <Badge variant="outline" className={getPlatformColor(task.platform)}>
            {task.platform}
          </Badge>
          <Badge variant="outline" className={getStatusColor()}>
            {getStatusText()}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-lg font-medium tracking-tight">{task.title}</CardTitle>
          <CardDescription className="mt-2 line-clamp-2">{task.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1.5 h-4 w-4" />
            <span>{task.deadline || 'No deadline'}</span>
          </div>
          <div className="flex items-center font-medium text-[hsl(267,100%,63.5%)] ">
            <Trophy className="mr-1.5 h-4 w-4" />
            <span>{task.reward.amount} {task.reward.token}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-4">
        {task.link && (
          <Button variant="ghost" size="sm" className="gap-1.5" asChild>
            <a href={task.link} target="_blank" rel="noopener noreferrer">
              Details
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        
        {!submitted ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-auto bg-[hsl(267,100%,63.5%)] text-white hover:bg-[hsl(267,100%,60%)]" size="sm">Submit Proof</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Submit Task Proof</DialogTitle>
                <DialogDescription>
                  Provide your {task.platform} handle or ID as proof of completing this task.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="handle" className="text-right">
                    {task.platform} Handle
                  </Label>
                  <Input
                    id="handle"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="col-span-3"
                    placeholder={`Your ${task.platform} handle`}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting || !handle.trim()}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : task.verified ? (
          <div className="ml-auto flex items-center text-emerald-500">
            <CheckCircle2 className="mr-1.5 h-4 w-4" />
            Completed
          </div>
        ) : (
          <div className="ml-auto flex items-center text-amber-500">
            <AlertCircle className="mr-1.5 h-4 w-4" />
            Pending
          </div>
        )}
      </CardFooter>
    </Card>
  );
}