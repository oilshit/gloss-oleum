class Glossary {
  constructor(name) {
    this.name = name;
    this.definitionList = [];
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
    prename = this.name.split(" ");
    firstname = prename.slice(0, prename.length - 1);

    return `${prename[prename.length - 1]}, ${prename.join(" ")}`;
  }
}

const item1 = new GlossaryItem(
  "object orient programming language designed to make web development easier and more attractive",
  "Laura M.",
  2020,
  "What Is JavaScript Used For And Why You Should Learn It",
  "BitDegree"
  );

console.log(item1.getAuthor);