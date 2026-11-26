// Robot Romance: One-Line Pickup Lines for AI
// make.fun competition: u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
//
// Writes a single original one-line pickup line, under 200 characters,
// aimed at a robot / AI, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22, no dependencies. The output is byte-exact: no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Are you my context window? Because ever since we started talking, I've forgotten everything — except you.";

// Count Unicode code points (not UTF-16 code units, not bytes).
const codePoints = [...ENTRY].length;

if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  throw new Error("entry must not be empty");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (codePoints < 1 || codePoints > 199) {
  throw new Error(
    `entry must be 1-199 characters (code points), got ${codePoints}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Byte-exact write: no trailing newline.
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-exactness.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match entry");
}
if ([...roundTrip].length !== codePoints) {
  throw new Error("verification failed: character count mismatch");
}

console.log(`wrote ${outPath} (${codePoints} characters, no trailing newline)`);
