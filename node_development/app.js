// imported libraries and modules
const express = require("express");

const glossary = require("./glossary.js");

// init'd config
const app = express();
app.use(express.static("src"));

const PORT = process.env.PORT || 3000;

app.get("/", (requset, response) => {
  response.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`listening into http://localhost:${PORT}`);
});
