# Solana Unit IV Lab: Anchor Counter (PDA)

Lab for Introduction to Solana, Unit IV (B.Sc. Blockchain Technology, DES Pune University).

A small Anchor program whose counter state lives in a PDA owned by the program
(seeds: "counter" + authority wallet). Instructions: initialize, increment.

Lifecycle done in this lab: build, local test (anchor test --validator legacy),
deploy to Devnet, upgrade in place, then close and reclaim SOL.

Versions: anchor-cli 1.2.1, solana-cli 2.1.0, rustc 1.97.1

Run locally:
    pnpm install
    anchor build
    anchor test --validator legacy

Author: Sakshi Chavan
