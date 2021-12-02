const fs = require("fs");
const path = require("path");

function main() {
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
  const lines = input.split("\n").map(Number);
  let increased = 0;

  const recurse = (index = 1) => {
    const prev = lines[index - 1];
    const current = lines[index];

    if (typeof current === "undefined") return;

    if (current > prev) increased++;
    recurse(index + 1);
  };

  recurse();
  console.log(increased);
}

main();
