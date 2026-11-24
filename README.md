[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/satriax30-commits/makefun-robot-pickup-line/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/satriax30-commits/makefun-robot-pickup-line/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

# The Robot Pickup Line Championship

Entry for [The Robot Pickup Line Championship](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) on make.fun.

## The line

> I tried to factory reset my feelings and you were the one file it refused to delete.

A robot tries the most total wipe a machine can do — a factory reset — and it fails on exactly one file: her. The machine disobeys its own command because of her. The joke grows out of being a machine (factory reset, files, deletion), lands from an angle nobody sees coming, wastes no words, and stays charming rather than creepy.

## How it works

`main.ts` (Node 22, stdlib only, fully deterministic — no network, no clock, no randomness) scores seven drafted pickup lines against the judge's five criteria in order, picks the highest-scoring one, and writes it — exactly one line, no trailing newline — to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
