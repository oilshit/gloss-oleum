const express = require("express");
const mongo = require("mongodb").MongoClient;
const app = express();

const PORT = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';

const glossary = require("./glossary.js");

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