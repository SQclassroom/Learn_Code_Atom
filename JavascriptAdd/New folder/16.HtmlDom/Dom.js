// Document Object Model in JavaScript

// What is Document Object Model (DOM)
// The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

// The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

// Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

// A document as a hierarchy of nodes
// The DOM represents an HTML document as a hierarchy of nodes. Consider the following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM</title>
//     </head>
//     <body>
//         <p>Hello DOM!</p>
//     </body>
// </html>

// In this DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.

// Each document can have only one document element. In an HTML document, the document element is the <html> element. Each markup can be represented by a node in the tree.

// Selecting elements

// getElementById() – select an element by id.
// getElementsByName() – select elements by name.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.


// JavaScript getElementById

{
    const p = document.getElementById('message');
    console.log(p);
}
