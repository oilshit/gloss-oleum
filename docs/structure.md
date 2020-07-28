# structure

In this note, we will learn how to use the `glossary.js`

- there are 2 classes in the file: `Glossary` and `GlossaryItem`
  - `Glossary` contains
    - property
      - `name` property, contains glossary term
      - `definitionList` property, contains a place for definition and its reference, init'd by an empty array.
    - methods
      - `addDefinitionList(definitionList)`, adding one definition to glossary term with `definitionList` parameter
  - `GlossaryItem` contains
    - property:
      - `definition` property, what does the term defines to
      - `author` property, from who
      - `year` property, when the author stated
      - `title` property, in where or in which book or publication the author stated
      - `publisher`, instantion of publication
    - method
      - `getAuthor()`, return author based on APA citation
      - `getAPA()`, return the reference based on APA citation