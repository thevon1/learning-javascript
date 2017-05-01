// All useful programs operate on data types.  Javascript is no exception.
// In javascript, the basic datatypes are as follows:
//
// * undefined
// * null
// * boolean
// * number
// * string
// * object
//
// To write javascript you need to have a solid understanding of these basic data
// types, what they are and why you'd use them.
//
// > undefined
//
// The undefined data type represents an undefine value.  It may seen meaningless
// to have such a data type, but it has it's place.  We can't fully understand the
// undefined type at this time, but suffice it to say for now that it exists and that
// you will use it frequently.  In javascript there are several ways to use this
// data type, but perhaps the most frequent way is to simply type:

undefined

// Go ahead and type that into your chrome console and press enter.  Nothing happens
// other than chrome echos back "undefined".
//
// > null
//
// The null data type is a type that has no value.  It does not occur naturally in
// javascript, so when you're dealing with this data type you know it's because a
// programmer intentionally used it.  It can be used as follows:

null

// null comes in handy when you want to express that something has no value and it
// is intentionally so.
//
// > boolean
//
// boolean data types have only 2 possible values: true and false.  They can be used
// as follows:

true

false

// > number
//
// Number data types represent numbers.  In javascript there is no difference
// between 10, 10.00, and 1e1.  Numbers can be used as follows:

10
10.00
1e1
NaN
Infinity

// "10" is a number with no decimal places.
// "10.00" is a number with no decimal places because the decimal has no value.
// javascript doesn't hold on to decimal values that equal 0.
// "1e1" is the number 10 in scientific notation.  1e1 equals 10.  You may be thinking
// that the "e" in "1e1" means "exponent".  It doesn't.  It means the number of times
// to multiply the number by "10".  Scientific notation can also be used with numbers
// that have decimal values e.g.

10.01e2

// such a representation equals 1001.  Scientific notation isn't used very much in
// javascript.  The most common number format is integer (e.g. 10), and float (e.g.
// 10.05).
//
// NaN is a very strange javascript representation of a number that means "not a
// number".  The author almost didn't even include it but it is part of the language
// and you should know what it is should you encounter it.  The most common way to
// encounter NaN is to perform an arithmetic expression involving a data type other
// than number e.g. 10 * undefined.  Not all arithmetic expressions involving non
// number types produce NaN which adds to the confusion e.g. 10 * null = 0.  At this
// point you shouldn't concern yourself too much with this number type but you should
// know it exists.  You can use it as follows:

NaN

// Infinity is a way to represent a number that is too large or small for javascript
// to process.  The easiest way to create Infinity is to divide a number by 0.
// You can use it as follows:

Infinity

// > string
//
// string data types represent a series of characters, or a string of characters.
// javascript strings can be enclosed in single or double quotes, it does not matter
// which you decide to use.  "asdf" and 'asdf' are the same string even though you
// can use single or double quote.  This is a starting point for many flame wars in
// the javascript community.  beware :|.  The most common way to type a string in
// javascript is to enclose with single quotes.  Single quotes are easier to type
// (you don't need a shift key), and are the most common.  You can use strings as
// follows:

"some string of characters"
'some string of characters'

// strings cannot be broken up over multiple lines without using the '+' operator.
// The following are both equal:

'some really long string'
'some ' +
'really ' +
'long ' +
'string'

// we'll cover operators in more detail later.
//
// > object
//
// object is a data type meant to contain properties.  Properties are named, and
// contain values.  object property values can be any value allowed in javascript.
//
// object property names are restricted as follows:
//
// * They must start with one of the following characters: a-z, A-Z, _, and $.
// * They can end with any of the allowable characters at the beginning in addition
// to 0-9.
//
// The following are valid javascript property names:
//
// * $wow
// * wow
// * _wow
// * wow4
//
// objects can be created as follows:
//
// * object literals
// * calling the Object constructor
//
// Here is an object literal:

{};

// Here is an object created by calling the Object constructor:

new Object();

// Both of these statements are equivalent.  It is preferred to use the object literal
// form because you can add properties and values at the time of object creation.
//
// Let's create an object that represents a wall:

{
  length: 42,
  name: 'SE',
  materialType: 'brick'
};

// If we were to create the same object with the object constructor we would have to
// do this:

var wall = new Object();
wall.length = 42;
wall.name = 'SE';
wall.materialType = 'brick';

// As you can see there was considerable more typing involved with the constructor
// form.  We also need to understand more javascript concepts to fully understand
// what is going on with the contructor form.
//
// Working with objects is a future lesson.  Suffice it to say about objects for now
// that they exist in javascript and that we can use them.
