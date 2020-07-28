const express = require("express");
const mongo = require("mongodb").MongoClient;

const glossary = require("./glossary.js");

const app = express();
app.use(express.static("src"));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';


mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("mongodb is here to serve your data. enjoy!");

  const db = client.db('kennel')
  const collection = db.collection('dogs')
  collection.insertOne({name: 'Roger'}, (err, result) => {
    // console.log(result);
  })

  collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {

  })

  collection.find().toArray((err, items) => {
    console.log(items)
  })

})

app.get("/", (requset, response) => {
  response.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`listening into http://localhost:${PORT}`);
});