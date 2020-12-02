// imported libraries and modules
const express = require("express");
const mongo = require("mongodb").MongoClient;

const glossary = require("./glossary.js");

// init'd config
const app = express();
app.use(express.static("src"));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';

// init'd MongoDB connection
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }

  console.log("mongodb is here to serve your data. enjoy!");

  // init'd DB instance
  const db = client.db('glossoleum')
  const collection = db.collection('glossary')
  
  // // insert one glossary term
  // collection.insertOne(
  //   new glossary.Glossary("javascript"),
  //   (err, result) => {
  //   console.log("a glossary added");
  // })

  // collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {

  // })

  // select all data
  collection.find().toArray((err, items) => {
    console.log(items)

    items.forEach((item => {
      console.log(item.definitionList);
    }));
  })

  // // push one glossary item
  // // into one glossary term
  // collection.updateOne(
  //   {name: "javascript"},
  //   {
  //     $push: {
  //       "definitionList": new glossary.GlossaryItem(
  //         "a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification",
  //         "Tom McFarlin",
  //         2016,
  //         "What Is JavaScript?",
  //         "tutsplus"
  //       )
  //     }
  //   }, (err, item) => {
  //   console.log("one definition added")
  // });

  // client.close();
});

app.get("/", (requset, response) => {
  response.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`listening into http://localhost:${PORT}`);
});
