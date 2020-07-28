# testing

in the testing purpose, you can use directly these codes below by copying and pasting the code below to `../glossary.js` between `Class` initiation and `module.exports`. In order to run the testing, you can use `node ../glossary.js` (this directory) in your terminal. 


let's create our first glossary term
```js
// let's init the first glossary
const glossary1 = new Glossary("javascript");
```

and also the glossary item
```js
const item1 = new GlossaryItem(
  "object orient programming language designed to make web development easier and more attractive",
  "Laura M.",
  2020,
  "What Is JavaScript Used For And Why You Should Learn It",
  "BitDegree"
);
```

and let's see the glossary item by typing `console.log(item1)`
```js
// let's see what item1 looks like
console.log(item1);
```

let's use the information saved on item1 to get author based on APA citation
```js
// let's use information of item1
//// to get the author based on APA
console.log(item1.getAuthor());
```

let's add some information to the glossary term list. using `addDefinitionList(item1)` method will add item1 into glossary1's addDefinitionList property.
```js
// let see what glossary1 looks like
console.log(glossary1);

// let's add several definition items to glossary1
glossary1.addDefinitionList(item1);
glossary1.addDefinitionList(new GlossaryItem(
  "a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification",
  "Tom McFarlin",
  2016,
  "What Is JavaScript?",
  "tutsplus"
));
```

after addition of item1, typing this again will return the glossary1 after the addition
```js
// let's see the final of glossary1 after the addition
console.log(glossary1);
```

we can also use the information saved on glossary1 to get the author
```js
// let's try gather information of the class inside the class
console.log(glossary1.definitionList[1].getAuthor());
console.log(glossary1.definitionList[1].getAPA());
```

and let's convert our data into our actual object so that we can store the data
```js
const definitionObject = JSON.parse(JSON.stringify(glossary1.definitionList));
```
```js
console.log(definitionObject);
```