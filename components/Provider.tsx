"use client";

import React, { useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT ?? clusterApiUrl(network), [network]);

    return (
        <ConnectionProvider endpoint={endpoint} >
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}