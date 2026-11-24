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

// The grader mounts /output: clear its contents but never remove the
// directory itself (removing it breaks the mount).
mkdirSync("/output", { recursive: true });
for (const entry of readdirSync("/output")) {
  rmSync(`/output/${entry}`, { recursive: true, force: true });
}

writeFileSync("/output/entry.txt", EXCUSE, "utf8");
