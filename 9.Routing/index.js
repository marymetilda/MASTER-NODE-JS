import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    // res.end("<h1>Home</h1>");
    res.end("<a href='/about'>About Page</a>");
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end("<h1>About</h1>");
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h1> 404 page not found :(</h1>");
  }
});

// /homepage
// /about

server.listen(8000, () => console.log("Server Up!"));
