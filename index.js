const express = require("express");
const app = express();

app.get("*", async (req, res) => {
  try {
    // res.setHeader("Access-Control-Allow-Origin", "https://fiddle.jshell.net");

    // res.setHeader("content-type", "application/json");

    // const object = { foo: "bar", fizz: "buzz" };
    // res.write("[\n");
    // const rows = 3000;
    // for (let i = 0; i <= rows; i++) {
    //   res.write(JSON.stringify(object));
    //   if (i < rows) {
    //     res.write(",\n");
    //   }
    // }
    // res.write("]");
    console.log(`Called with ${req.path}`)
    setTimeout(() => res.send({}), 60 * 1000 * 30); // 30 minutes
  } catch (e) {
    console.error(e);
  }
});

app.listen(process.env.PORT || 8081);
