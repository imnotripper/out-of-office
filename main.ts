// The Funniest Out-of-Office — deterministic emitter.
// Writes the winning line (see selection.md) to /output/entry.txt, then
// reads it back and checks the gate itself: UTF-8 text, 1-140 characters,
// a single line, not only white space. Nothing is random, nothing is read
// from the environment: two runs write byte-identical files.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const LINE =
  "Out of office. The coffee machine finally achieved sentience and I'm negotiating its demands.";

const OUT = '/output/entry.txt';

const chars = [...LINE].length;
if (chars < 1 || chars > 140) throw new Error(`entry is ${chars} characters, gate needs 1-140`);
if (LINE.trim().length === 0) throw new Error('entry is only white space');
if (LINE.includes('\n')) throw new Error('entry must be a single line');

mkdirSync('/output', { recursive: true });
writeFileSync(OUT, LINE + '\n', 'utf8');
chmodSync(OUT, 0o644);

const back = readFileSync(OUT, 'utf8');
if (back !== LINE + '\n') throw new Error('read-back mismatch');
console.log(`wrote ${OUT} (${chars} chars)`);
