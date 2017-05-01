// In most programming languages we have what are called "variables".  A variable
// is really just a way of referring to something.  We can declare variables and we
// can assign values to them.
//
// This is an example of declaring a variable:

var a;

// In javascript "var" is a keyword.  Keywords are reserved words that may not be
// used as variable names.  For a complete list of keywords see:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
//
// When a variable is declared javascript automatically assigns it a value of
// undefined.
//
// If we want to assign a value to "a" we use the "=" operator like so:

var a = 5;

// "var a = 5;" is an example of declaration and assignment in a single expression
// statement.
//
// We could also declare multiple variables on the same line like so:

var a, b, c;

// It's good practice to have a single space after a separator like ",".  Doing so
// improves the readability of your programs.
//
// You may be wondering what purpose it serves to simply declare a variable without
// assigning a value to it.  In javascript, if you attempt to reference a variable
// that has not been declared you'll generate what is known as a ReferenceError.
// This Error is thrown when a reference is made to a variable that has not been
// declared.  So far we haven't declared the variable "dog".  Let's see what happens
// when we try to reference it.  Go ahead and type "dog" in your chrome console.
// You should receive a ReferenceError.
//
// To prevent ReferenceErrors from occuring we can declare the variable.

var dog;

// Now that "dog" has been declared we can use it in our code and no Error will be
// thrown.  Go ahead and try it.  You'll notice that the value of dog is undefined.
//
// In addition to being able to declare multiple variables on a single line by
// separating them by commas, we can also assign values to them in the process.

var a, b = 2, c = 4;

// "a" now equals "undefined", "b" equals "2", and "c" equals "4".
//
// You'll notice that we've been terminating our lines with a semi-colon.  In
// javascript a semi-colon denotes the end of a statement.  It is valid javascript
// to omit them at the end of a statement, but it is not good practice to do so.  This
// is also another start for a flame war in the community as some developers like
// to exploit every opportunity to write less code.  Suffice it to say that most
// code style guides recommend using semi-colons and that you can't go wrong by
// including them.
//
// When declaring a variable, the "var" keyword is optional if we assign a value to
// it like so:

zoo = 6;

// This is dangerous though because zoo is now a global variable that can be accessed
// from anywhere.  We'll get to scopes in a future lesson.  Suffice it to say now
// that you should always declare variables using the "var" keyword.
//
// Once a variable has been declared it can be assigned a value without the "var"
// keyword like so:

var park;
park = 2;

// The second line "park = 2;" doesn't create a global variable provided it resides
// in the same scope as the "var park;" line.  Again, we'll get to scopes later.
//
// You can assign any value you wish to variables.  These are all valid:

var a = undefined;
var b = null;
var c = true;
var d = 30.55;
var e = 'hello e';
var f = {};

// variables values are what the word "variable" suggests: they're variable.  You
// can assign a value to a variable at any time:

var a = 5;
a = 6;
a = 7;
