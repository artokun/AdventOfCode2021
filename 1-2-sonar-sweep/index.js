const fs = require("fs");
const path = require("path");

function main() {
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
  const lines = input.split("\n").map(Number);
  let increased = 0;

  const slidingWindow = (index) => {
    const top = lines[index - 2];
    const middle = lines[index - 1];
    const bottom = lines[index];
    return top + middle + bottom;
  };

  function recurse(index = 3) {
    const prev = slidingWindow(index - 1);
    const curr = slidingWindow(index);

    if (Number.isNaN(curr)) return;

    if (curr > prev) increased++;
    recurse(index + 1);
  }

  recurse();
  console.log(increased);
}

main();
