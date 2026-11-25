import { writeFileSync, mkdirSync } from "node:fs";

// Two robots, one stalled elevator, zero exits.
const firstRobot =
  "Stuck between floors, one robot says, 'I have 4,096 backup plans.'";
const secondRobot =
  "The other replies, 'Wonderful. Not one of them opens the door.'";

const line = `${firstRobot} ${secondRobot}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
