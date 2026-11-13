import * as anchor from "@anchor-lang/core";
import { Program } from "@anchor-lang/core";
import { Counter } from "../target/types/counter";

describe("counter", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.counter as Program<Counter>;

  it("initializes the counter", async () => {
    await program.methods
      .initialize()
      .accountsPartial({ authority: program.provider.publicKey! })
      .rpc();
    const all = await program.account.counter.all();
    console.log("count after initialize:", all[0].account.count.toString());
  });

  it("increments the counter", async () => {
    await program.methods
      .increment()
      .accountsPartial({ authority: program.provider.publicKey! })
      .rpc();
    const all = await program.account.counter.all();
    const count = all[0].account.count.toString();
    if (count !== "1") throw new Error(`expected 1, got ${count}`);
  });
});
