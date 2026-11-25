// One-Line Laugh-Off — entry program (v2).
// Writes exactly one funny line to /output/entry.txt, deterministically.
// The gate is checked here too: 1-200 characters, not only white space,
// so a bad line fails loudly instead of shipping an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I pushed to production on a Friday and the server filed a restraining order against me.";

// Gate self-check (mirrors the sealed scorer: UTF-8, 1-200 chars, non-blank).
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${[...ENTRY].length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
