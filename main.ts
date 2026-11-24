// Famous Last Words at 1 Percent
//
// The judge reads one line: the last words a phone says as its battery
// hits 1 percent. This program writes that single line to /output/entry.txt.
// It is fully self-contained: no network, no secrets, no files outside the
// repository, no reading of git history or the environment.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// One line, spoken in the phone's own voice, about its own dying battery,
// with the punch landing at the very end. The phone announces its own death
// the way it announces everything else: as a dismissible OS notification.
const LAST_WORDS =
  "I'm at 1%. Final notification: 'Battery: 1%.' Tap to learn more.";

// The gate accepts 1..199 UTF-8 characters that are not all whitespace.
// Fail loudly during development rather than ever shipping an invalid line.
const length = [...LAST_WORDS].length;
if (length < 1 || length > 199 || LAST_WORDS.trim().length === 0) {
  throw new Error(`last words must be 1-199 non-blank characters (got ${length})`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LAST_WORDS, "utf8");
