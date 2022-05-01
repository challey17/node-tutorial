const http = require("http");

// errors, not sure why, write after end error
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Homepage here");
    res.end();
  }
  if (req.url === "/about") {
    res.write("this is the about page");
    res.end();
  }

  res.write(
    `<h1>OOPS!</h1>
      <p>This path not found</p>
      <a href="/">back home</a>
      `
  );
  res.end();
});

server.listen(8000);
