"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wallet } from "lucide-react";

export function WalletConnectButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  
  const connectWallet = () => {
    const mockAddress = "8xyt...3Kj9";
    setAddress(mockAddress);
    setIsConnected(true);
  };
  
  const disconnectWallet = () => {
    setAddress("");
    setIsConnected(false);
  };

  return (
    <>
      {!isConnected ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              <Wallet className="mr-2 h-4 w-4" />
              Connect
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Connect wallet</DialogTitle>
              <DialogDescription>
                Choose your preferred Solana wallet to connect and start completing tasks.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button 
                variant="outline"
                className="flex justify-between items-center w-full" 
                onClick={connectWallet}
              >
                <span>Phantom</span>
                <Wallet className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="flex justify-between items-center w-full"
              >
                <span>Solflare</span>
                <Wallet className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="flex justify-between items-center w-full"
              >
                <span>Backpack</span>
                <Wallet className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Button 
          variant="outline" 
          size="sm"
          onClick={disconnectWallet}
          className="relative"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {address}
        </Button>
      )}
    </>
  );
}