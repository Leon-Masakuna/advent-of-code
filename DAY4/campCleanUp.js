const { readFileSync } = require("fs");

const lines = readFileSync("sample.txt", "utf-8").trim().split("\n");
console.log("data : ", lines);

function part1() {
  const res = lines.map((line) => {
    const temp = line
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSize = a[1] - a[0];
        const twoSize = b[1] - b[0];
        return twoSize - oneSize;
      });

    const [interval1, interval2] = temp;

    console.log("temp", temp);

    const oneFullContainsTwo =
      interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

    return oneFullContainsTwo ? 1 : 0;
  });
  console.log("res", res);
  console.log(res.reduce((a, b) => a + b, 0));
}

function part2() {
  const res = lines.map((line) => {
    const [first, second] = line
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSize = a[1] - a[0];
        const twoSize = b[1] - b[0];
        return twoSize - oneSize;
      });

    const overlap = first[1] >= second[0] && second[1] >= first[0];

    return overlap ? 1 : 0;
  });
  console.log(res.reduce((a, b) => a + b, 0));
}

part1();
// part2();
