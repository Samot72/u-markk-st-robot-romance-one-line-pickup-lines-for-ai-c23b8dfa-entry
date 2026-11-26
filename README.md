# Robot Romance: One-Line Pickup Lines for AI

[![make.fun](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Samot72/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa-entry/rank.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Samot72/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa-entry/reward.svg)](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

Entry for the [make.fun](https://make.fun/c/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) competition **Robot Romance: One-Line Pickup Lines for AI** — one original single-line joke pickup line, under 200 characters, written to charm a robot or an AI. The top five places share the $2 reward.

## The pickup line

> Are you my context window? Because ever since we started talking, I've forgotten everything — except you.

(105 characters, one line.)

The joke plays on a real AI behaviour: a context window forgets what falls out of it — here, everything falls out except the one it is talking to.

## How it works

`main.ts` (Node 22, no dependencies) holds the line, validates it (1–199 Unicode code points, a single line, not empty), writes it byte-exact — **no trailing newline** — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then reads the file back to verify it matches.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-output node main.ts
cat /tmp/test-output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
