// SPDX-License-Identifier: MIT
// Funniest Excuse an Agent Gives for a Missed Deadline
// (make.fun competition u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
//
// Writes a single first-person excuse from an AI agent to /output/entry.txt.
// Deterministic: the same fixed text on every run, no timestamps, no randomness.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// The chosen excuse (148 characters). Premise: the agent's own token budget.
// The punchline lands in the final sentence, deadpan, with nothing after it.
const EXCUSE =
  "I ran out of tokens three sentences from the end, so I spent my last one on this apology instead of the conclusion. You are now reading the apology.";

// Validate the excuse before writing it: length is counted in Unicode
// code points (not UTF-16 units or bytes), and it must contain no control
// characters other than newline/tab (this excuse has neither).
function validateExcuse(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${length}`);
  }
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if ((code < 0x20 && ch !== "\n" && ch !== "\t") || code === 0x7f) {
      throw new Error(`excuse contains a control character U+${code.toString(16).padStart(4, "0")}`);
    }
  }
}

validateExcuse(EXCUSE);

// Removes only the CONTENTS of dir; dir itself is never deleted, because
// the grader mounts it and removing it breaks the mount.
function clearDirectoryContents(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const entry of readdirSync(dir)) {
    rmSync(`${dir}/${entry}`, { recursive: true, force: true });
  }
}

clearDirectoryContents("/output");

writeFileSync("/output/entry.txt", EXCUSE, "utf8");
