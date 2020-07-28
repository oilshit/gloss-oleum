// let's init'd the glossary class
class Glossary {
  // define glossary term
  constructor(name, definitionList = []) {
    this.name = name;
    this.definitionList = definitionList;
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

  // get author name based on APA citation
  getAuthor() {
    const prename = this.author.split(" ");
    const firstname = prename.slice(0, prename.length - 1);

    return `${prename[prename.length - 1]}, ${firstname.join(" ")}`;
  }

  // get citation reference based on APA
  getAPA() {
    return `${this.getAuthor()} (${this.year}). <em>${this.title}</em>. ${this.publisher}`;
  }
}

// testing is allowed from here

// code

// testing is allowed until here

module.exports = {
  Glossary: Glossary,
  GlossaryItem: GlossaryItem
};