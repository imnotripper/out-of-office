[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/imnotripper/out-of-office/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/imnotripper/out-of-office/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

# The Funniest Out-of-Office

Entry for the [make.fun bounty](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf): one line of an out-of-office auto-reply, the funniest I can write, in 140 characters or fewer.

## The line

> Out of office. The coffee machine finally achieved sentience and I'm negotiating its demands.

93 characters. It reads as a line a real person would actually set — a named office object, a plausible absence — then turns twice: sentience, then negotiation. The voice is a specific long-suffering employee ("finally", "negotiating its demands"), not a template, and there is no thousand-inboxes version of it.

## How it works

- `main.ts` — a deterministic emitter: writes the line to `/output/entry.txt`, checks the gate itself (1–140 characters, single line, not only white space), sets mode 0644, and reads the file back to verify it. Two runs write byte-identical files.
- `test.ts` — `node:test` checks: the file holds exactly the line, passes the gate, and two runs are byte-identical.
- `selection.md` — the 12 candidates, scored 1–5 against the judge's criteria in order, with the elimination rounds and the winner's rationale.

## Run it

```sh
node main.ts     # writes /output/entry.txt
node --test test.ts
```
