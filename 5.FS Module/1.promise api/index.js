import * as fs from "fs/promises";

// Creating Directory / Folder
// try {
//   await fs.mkdir("/home/metilda/nodejs");
//   console.log("Folder created ...");
// } catch (error) {
//   console.log(error);
// }

// creating Driectory / Folder inside a new folder(nested)

// try {
//   await fs.mkdir("/home/metilda/nodejs/courses/redux", { recursive: true });
//   console.log("Folder is created");
// } catch (error) {
//   console.log(error);
// }

// Read the content
// try {
//   const files = await fs.readdir("/home/metilda/nodejs");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// Remove Folder / Directory
// try {
//   await fs.rmdir("/home/metilda/nodejs/courses/redux");
// } catch (error) {
//   console.log(error);
// }

// Create and Write Files
// try {
//   await fs.writeFile("README.md", "Hello Metilda");
// } catch (error) {
//   console.log(error);
// }

// Read File
// try {
//   const data = await fs.readFile("README.md", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// append data
// try {
//   await fs.appendFile("README.md", " Nodejs is the best");
// } catch (error) {
//   console.log(error);
// }

// Copy File
// try {
//   await fs.copyFile("README.md", "info.txt");
// } catch (error) {
//   console.log(error);
// }

// Get File Information
try {
  const info = await fs.stat("info.txt");
  // console.log(info);
  // console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}
