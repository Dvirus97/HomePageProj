const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const url = __dirname + "/page.html";
  res.sendFile(url);
});

app.listen(3030, console.log("http://localhost:3030"));
