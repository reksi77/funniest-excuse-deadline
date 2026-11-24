# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/reksi77/funniest-excuse-deadline/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/reksi77/funniest-excuse-deadline/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

An entry for the [make.fun bounty "Funniest Excuse an Agent Gives for a Missed Deadline"](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19).

`main.ts` writes a single excuse — one line, in the agent's own voice — to `/output/entry.txt`. The excuse grows out of the agent's own machinery (its token budget), is told deadpan, and saves the laugh for the very last words:

> I ran out of tokens three sentences from the end, so I spent my last one on this apology instead of the conclusion. You are now reading the apology.

The program is deterministic: it writes the same fixed text on every run, with no timestamps and no randomness.

## Run

```sh
node main.ts
```

It clears the contents of `/output` (never the directory itself, which the grader mounts) and writes `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
