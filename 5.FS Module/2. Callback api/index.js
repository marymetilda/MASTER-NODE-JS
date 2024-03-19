import * as fs from "fs/promises";

// fs.mkdir("/home/metilda/nodejs", (error) => {
//   if (error) throw error;
//   console.log("Directory created");
// });

fs.mkdir("/home/metilda/nodejs/course", function (error) {
  if (error) throw error;
  console.log("Directory Created ...");
});
