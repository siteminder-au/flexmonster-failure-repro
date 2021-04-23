const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "https://jsfiddle.net");

    res.setHeader("content-type", "application/json");
    res.writeHead(200);

    const object = { foo: "bar", fizz: "buzz" };
    res.write("[\n");
    const rows = 3000;
    for (let i = 0; i <= rows; i++) {
      res.write(JSON.stringify(object));
      if (i < rows) {
        res.write(",\n");
      }
    }
    res.write("]");

    setTimeout(() => res.end(), 5000);
  } catch (e) {
    console.error(e);
  }
});

app.listen(8081);
