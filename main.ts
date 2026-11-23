import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const label =
  "CAUTION: This human was assembled without instructions, has no warranty, and will press every button marked DO NOT PRESS.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label + "\n", "utf8");
