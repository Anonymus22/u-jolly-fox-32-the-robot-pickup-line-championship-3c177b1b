import { mkdirSync, writeFileSync } from "node:fs";

// Original pickup line written for The Robot Pickup Line Championship.
// A robot that ran ten thousand simulations of meeting someone — and
// crashed before delivering its opening line in every single one.
// Machine logic, machine failure: 98 characters, one line.
const LINE =
  "I ran 10,000 simulations of us meeting, and in every single one, I crashed before my opening line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
