const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const glossary = require("./glossary.js");

app.get("/", (requset, response) => {
  response.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`listening into http://localhost:${PORT}`);
}); 
