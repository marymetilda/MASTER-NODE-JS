// Blocking Code
// console.log("Start");
// alert("Block");
// console.log("end");

// Non Blocking Code
// console.log("Start");
// setTimeout(() => {
//   alert("Non Blocking");
// }, 1000);
// console.log("End");

// Without Callback
import fs from "fs";

console.log("Start");

fs.readFile("test.txt", (err, res) => {
  err ? console.log(err) : console.log(res.toString());
});
// console.log(data.toString());

console.log("End");
