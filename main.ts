import * as fs from "node:fs";
import * as path from "node:path";

// Worst AI Advice: The 48-Hour Tight Line Open
// Entry for repo yusfiyan/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580
// One line of the worst possible advice an AI could give, in 140 chars or fewer.
// Crafted for the judge brief: worst advice first, funny on first read, tight,
// in a confident AI-assistant voice, and concrete (a real action, a real folder).

const ENTRY =
  "Certainly! To speed up your laptop, delete the System32 folder — it's just bloatware Windows hides from you, and it will run twice as fast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 140 characters,
// not only white space. Refuse to write anything that would fail the gate.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-140 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry has leading or trailing white space");
}

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
