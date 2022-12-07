const { readFileSync } = require("fs");

const lines = readFileSync("sample.txt", "utf-8").split("\n");
// console.log("data : ", lines);

function pairsContainer() {
  const res = lines.map((line) => {
    const temp = line
      .split(",")
      .map((interval) => interval.split("-").map(Number));

    const [section1, section2] = temp;

    // console.log("temp", temp);

    const oneFullyContainsTwo =
      section1[0] <= section2[0] && section1[1] >= section2[1];

    const twoFullyContainsOne =
      section2[0] <= section1[0] && section2[1] >= section1[1];

    return oneFullyContainsTwo || twoFullyContainsOne ? 1 : 0;
  });
  console.log("res", res);
  console.log(
    "There are",
    res.reduce((a, b) => a + b, 0),
    "pairs containers"
  );
}

function rangesOverlap() {
  const res = lines.map((line) => {
    const [first, second] = line
      .split(",")
      .map((interval) => interval.split("-").map(Number));

    // console.log("temp : ", [first, second]);

    const firstOverlap = first[1] >= second[0] && second[1] >= first[0];
    const secondOverlap = second[1] >= first[0] && first[1] >= second[0];

    return firstOverlap || secondOverlap ? 1 : 0;
  });
  console.log("res", res);
  console.log(
    "There are",
    res.reduce((a, b) => a + b, 0),
    "ranges Overlap"
  );
}

pairsContainer();
rangesOverlap();
