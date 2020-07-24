// let's init'd the glossary class
class Glossary {
  // define glossary term
  constructor(name) {
    this.name = name;
    this.definitionList = [];
  }

  // add dedinition to the list
  addDefinitionList(definitionList) {
    this.definitionList.push(definitionList);
    
    console.log("one definition added");
  }
}

// let's init'd the glossary item class
//// it will be used for appending the Glossary definitionList
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

// let's init the first glossary
const glossary1 = new Glossary("javascript");

console.log();

// and alse the first glossary item
const item1 = new GlossaryItem(
  "object orient programming language designed to make web development easier and more attractive",
  "Laura M.",
  2020,
  "What Is JavaScript Used For And Why You Should Learn It",
  "BitDegree"
);

// let's see what item1 looks like
console.log(item1);

console.log();

// let's use information of item1
//// to get the author based on IPA
console.log(item1.getAuthor());

console.log();

// console.log(item2.getAuthor());

// let see what glossary1 looks like
console.log(glossary1);

console.log();

// let's add several definition items to glossary1
glossary1.addDefinitionList(item1);
glossary1.addDefinitionList(new GlossaryItem(
  "a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification",
  "Tom McFarlin",
  2016,
  "What Is JavaScript?",
  "tutsplus"
));

// let's see the final of glossary1 after the addition
console.log(glossary1);

console.log();

// let's try gather information of the class inside the class
console.log(glossary1.definitionList[1].getAuthor());