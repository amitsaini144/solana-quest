import { TaskCard, TaskProps } from "@/components/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TASKS: TaskProps[] = [
  {
    id: "1",
    title: "Follow SolanaQuest on Twitter",
    description: "Follow our official Twitter account to stay updated on the latest news and announcements.",
    reward: { amount: 0.05, token: "SOL" },
    difficulty: "Easy",
    platform: "Twitter",
    type: "Social",
    deadline: "No deadline",
    link: "https://twitter.com/solana",
  },
  {
    id: "2",
    title: "Join our Discord community",
    description: "Join our Discord server and introduce yourself in the #introductions channel.",
    reward: { amount: 0.1, token: "SOL" },
    difficulty: "Easy",
    platform: "Discord",
    type: "Social",
    deadline: "No deadline",
    link: "https://discord.gg/solana",
  },
  {
    id: "3",
    title: "Complete the Basic Solana Tutorial",
    description: "Go through the basic Solana development tutorial and build your first smart contract.",
    reward: { amount: 0.5, token: "SOL" },
    difficulty: "Medium",
    platform: "GitHub",
    type: "Development",
    deadline: "7 days left",
    link: "https://github.com/solana-labs/example-helloworld",
  },
  {
    id: "4",
    title: "Create an NFT on Solana",
    description: "Mint your first NFT on the Solana blockchain using the Metaplex framework.",
    reward: { amount: 1, token: "SOL" },
    difficulty: "Hard",
    platform: "GitHub",
    type: "Development",
    deadline: "14 days left",
    link: "https://docs.metaplex.com/",
  },
  {
    id: "5",
    title: "Share our hackathon announcement",
    description: "Retweet our hackathon announcement post and tag three friends who might be interested.",
    reward: { amount: 5, token: "QUEST" },
    difficulty: "Easy",
    platform: "Twitter",
    type: "Social",
    deadline: "3 days left",
    completed: true,
    verified: true,
  },
  {
    id: "6",
    title: "Submit a bug report",
    description: "Find and report a bug in our beta application. The more detailed your report, the better!",
    reward: { amount: 25, token: "QUEST" },
    difficulty: "Medium",
    platform: "GitHub",
    type: "Development",
    deadline: "10 days left",
    completed: true,
  },
];

export function TaskList() {
  const socialTasks = TASKS.filter(task => task.type === "Social");
  const devTasks = TASKS.filter(task => task.type === "Development");
  const completedTasks = TASKS.filter(task => task.completed);
  
  return (
    <Tabs defaultValue="all" className="w-full  px-4 md:px-0">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All Tasks</TabsTrigger>
        <TabsTrigger value="social">Social</TabsTrigger>
        <TabsTrigger value="dev">Development</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TASKS.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="social" className="mt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {socialTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="dev" className="mt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {devTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="completed" className="mt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {completedTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}