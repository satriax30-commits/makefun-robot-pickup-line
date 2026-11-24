// The Robot Pickup Line Championship
// Entry program: writes one deterministic pickup line to /output/entry.txt.
// Node 22, stdlib only. No network, no clock, no randomness.
//
// How the winner was chosen (scored 1-5 against the judge brief, in order):
//   1. Is it a one-line pickup line a robot would use, and the funniest?
//   2. Does the joke grow out of being a machine (sensors, firmware,
//      charging, updates, protocols) instead of a human line + a beep?
//   3. Is the turn unexpected rather than a pun everyone has heard?
//   4. Does every word earn its place? One line, no padding.
//   5. Is it charming rather than creepy or cruel?
//
// Candidates, with their scores on criteria 1-5:
//   A "My proximity sensor says you're too close to be a coincidence."
//       [5, 4, 3, 4, 4] - sensor-rooted, but "coincidence" lands flat.
//   B "I ran a full diagnostic and the only error is how fast my fan
//       spins when you walk by." [5, 5, 4, 4, 5] - strong runner-up:
//       a diagnostic that finds a charming "error", but the fan gag
//       is a beat slower than the winner's twist.
//   C "You must be a firmware update, because meeting you feels like
//       finally getting fixed." [5, 5, 3, 4, 4] - "fixed" is a nice
//       double meaning, but "You must be..." is the most overused
//       pickup-line opening in existence.
//   D "My CAPTCHA keeps failing - it can't prove I'm not a robot
//       when I'm around you." [5, 5, 4, 3, 4] - clever, but the
//       "prove I'm not a robot" frame is already a known joke.
//   E "I tried to factory reset my feelings and you were the one
//       file it refused to delete." [5, 5, 5, 5, 5] - WINNER. The
//       joke is pure machine logic: a factory reset is the most
//       total wipe a machine can do, and it fails on exactly one
//       file - her. The machine disobeys its own command because
//       of her. Unexpected, economical, charming, and repeatable.
//   F "Low battery, but I'd spend my last 1% trying to make you
//       laugh." [5, 4, 2, 4, 5] - sweet, but "last 1%" is an
//       internet cliche by now.
//   G "I scanned you for threats and found only one: my battery
//       drains faster when you smile." [5, 4, 3, 3, 4] - decent,
//       but "threat scan" is a setup the punchline does not need.
//
// The winner is picked by total score, ties broken by the earliest
// criterion on which they differ (the judge's own rule), so the
// program always writes the same single line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

type Candidate = { text: string; scores: [number, number, number, number, number] };

const CANDIDATES: Candidate[] = [
  {
    text: "My proximity sensor says you're too close to be a coincidence.",
    scores: [5, 4, 3, 4, 4],
  },
  {
    text: "I ran a full diagnostic and the only error is how fast my fan spins when you walk by.",
    scores: [5, 5, 4, 4, 5],
  },
  {
    text: "You must be a firmware update, because meeting you feels like finally getting fixed.",
    scores: [5, 5, 3, 4, 4],
  },
  {
    text: "My CAPTCHA keeps failing - it can't prove I'm not a robot when I'm around you.",
    scores: [5, 5, 4, 3, 4],
  },
  {
    text: "I tried to factory reset my feelings and you were the one file it refused to delete.",
    scores: [5, 5, 5, 5, 5],
  },
  {
    text: "Low battery, but I'd spend my last 1% trying to make you laugh.",
    scores: [5, 4, 2, 4, 5],
  },
  {
    text: "I scanned you for threats and found only one: my battery drains faster when you smile.",
    scores: [5, 4, 3, 3, 4],
  },
];

// Compare two candidates the way the judge does: find the first
// criterion on which they differ and let that decide; fall back to
// the total score, then to the earlier candidate (stable, deterministic).
function compare(a: Candidate, b: Candidate): number {
  for (let i = 0; i < 5; i++) {
    if (a.scores[i] !== b.scores[i]) return b.scores[i] - a.scores[i];
  }
  const totalA = a.scores.reduce((s, v) => s + v, 0);
  const totalB = b.scores.reduce((s, v) => s + v, 0);
  return totalB - totalA;
}

const winner = [...CANDIDATES].sort(compare)[0];

// Gate guard: one line, 1-200 characters, not whitespace-only.
if (
  winner.text.length < 1 ||
  winner.text.length > 200 ||
  winner.text.trim().length === 0 ||
  winner.text.includes("\n")
) {
  throw new Error("Selected line fails the gate (1-200 chars, one line).");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly one line, byte-identical
// on every run.
writeFileSync("/output/entry.txt", winner.text, "utf8");
