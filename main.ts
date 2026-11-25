// The Funniest Office Joke, Judged Head to Head
// make.fun bounty: u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// The whole entry is one short line about office life: a real joke with a
// setup and a turn, built on something anyone who has worked in an office
// recognises, with the punchline last.
//
// Setup: the office coffee machine — a daily, universal office ritual —
// only takes exact change. Turn: the manager, who behaves the same way,
// but with credit instead of coins. The punchline lands last, in one line,
// and it is new: nobody in the office tells this one yet.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The office coffee machine takes exact change only, like my manager takes exact credit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(JOKE);
