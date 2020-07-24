class Glossary {
  constructor(name) {
    this.name = name;
    this.definitionList = [];
  }

  addDefinitionList(definitionList) {
    this.definitionList.push(definitionList);

    console.log(this.definitionList);
  }
}

class GlossaryItem {
  // init'd constructor for glossary item
  constructor(definition, author, year, title, publisher) {
    this.definition = definition;
    this.author = author;
    this.year = year;
    this.title = title;
    this.publisher = publisher;
  }

  // get author name based on IPA citation
  getAuthor() {
    const prename = this.author.split(" ");
    const firstname = prename.slice(0, prename.length - 1);

    return `${prename[prename.length - 1]}, ${firstname.join(" ")}`;
  }
}

const glossary1 = new Glossary("javascript");

const item1 = new GlossaryItem(
  "object orient programming language designed to make web development easier and more attractive",
  "Laura M.",
  2020,
  "What Is JavaScript Used For And Why You Should Learn It",
  "BitDegree"
);

// const item2 = new GlossaryItem(
//   "a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification",
//   "Tom McFarlin",
//   2016,
//   "What Is JavaScript?",
//   "tutsplus"
// );

console.log(item1.getAuthor());

// console.log(item2.getAuthor());

glossary1.addDefinitionList(item1);
glossary1.addDefinitionList(new GlossaryItem(
  "a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification",
  "Tom McFarlin",
  2016,
  "What Is JavaScript?",
  "tutsplus"
));
