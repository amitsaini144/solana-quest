import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token';

// Initialize connection
const network = 'devnet';
const connection = new Connection(clusterApiUrl(network));

// Your program's wallet (should be securely stored)
const payer = Keypair.fromSecretKey(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]));

// Token mint details
let rewardTokenMint : PublicKey;
const decimals = 9; // Standard for most tokens

// Create the reward token (run once)
export async function initializeRewardToken() {
  rewardTokenMint = await createMint(
    connection,
    payer,
    payer.publicKey, // Mint authority
    payer.publicKey, // Freeze authority
    decimals
  );
  
  console.log('Reward Token Mint:', rewardTokenMint.toBase58());
  return rewardTokenMint;
}

// Distribute rewards to user
export async function distributeRewards(userWalletAddress: PublicKey, amount: number) {
  if (!rewardTokenMint) {
    throw new Error('Reward token not initialized');
  }

  // Get or create token accounts
  const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    rewardTokenMint,
    payer.publicKey
  );

  const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    rewardTokenMint,
    userWalletAddress
  );

  // Transfer tokens
  const transactionSignature = await transfer(
    connection,
    payer,
    sourceTokenAccount.address,
    destinationTokenAccount.address,
    payer.publicKey,
    amount * Math.pow(10, decimals) // Convert to token units
  );

  return transactionSignature;
}