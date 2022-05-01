// CommonJs , every file is a module by default
// Modules - Encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
require("./7-mind-grenade");
console.log(names);
sayHi("Angela");
//could also destructure
sayHi(names.chayce);
