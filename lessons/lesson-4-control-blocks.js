// In javascript we have some basic building blocks that allow us to control what
// happens in a given program.  Almost all control blocks take place between curly
// braces e.g. "{}".  These are not to be confused with object literals.
//
// If you were to type an object literal without a variable assignment prefix, you
// would receive an error:

/*
{
  a: 5
};
*/

// Take away the property declaration and assignment and you end up with a block
// statement:

{
  // statements
};

// In javascript, blocks do not need a trailing semi-colon so our previous block
// statement could be written like so:

{
  // statements
}

// You may be wondering what purpose a block statement serves.  This form of a block
// statement really doesn't serve much of a purpose.  It is mainly to organize and
// group code, but outside of that it really doesn't do much and it's use is
// discouraged because of it's uselessness.
//
// The next most common block is an "if" block.

if (true) {
  // execute statements.
}

// Our if block will always execute because the expression contained in parenthesis
// evaluates to true.  Let's create an if block that will never execute:

if (false) {
  // never run
}

// This if block is effectively useless because the expression contained in
// parenthesis always evaluates to false and prevents the statements inside the block
// from executing.
//
// We're introducing another concept here: expression statements.  We won't cover
// those in detail now, but realize that every building block in javascript relies
// on evaluating expression statements and the outcome of said statements determines
// the behavior of the block.
//
// if blocks can also have alternative blocks depending on the result of the
// expression.  Here are some examples:

var a = true;

if (a) {
  // do something
} else {
  // never run
}

// This if block has an else block that will run if the expression for if evaluates
// to false.  The expression will evaluate to true so the else block will never
// execute.
//
// Another alternative block for if is else if:

var bee = 'flying';

if (bee === 'dead') {
  // never run
} else if (bee === 'flying') {
  // do something
} else {
  // never run
}

// The else if block will run here because bee equals 'flying'.  else blocks are
// optional in an if so we could've written this:

var bee = 'flying';

if (bee === 'dead') {
  // never run
} else if (bee === 'flying') {
  // do something
}

// In javascript the curly braces are optional in blocks.  This is confusing and
// discouraged, but it is possible and you will likely encounter this from time to
// time.  It is important to be aware of this.

var a = true;

if (a) /*do something*/;

// Throughout these lessons we'll always surround blocks with curly braces as it is
// clearer to express the intent of our program that way and removes potential
// errors.
//
// If you recall from earlier lessons, semi-colons are not required line terminators
// in javascript.  Consider this in conjunction with an if block that has no curly
// braces to surround the block:

if (true)
console.log(5);

// If you copy and paste those 2 lines into your chrome console you'll see 5 printed.
// Now execute these 2 lines:

if (false)
console.log(5);

// counterintuitively 5 is not printed.  Just because you can do something, i.e.
// omit the curly braces in a block, doesn't mean that you should.  Programs are
// usually maintained for a long time and any effort you can make for them to be
// easier to understand is time well spent.
//
// You can have an unlimited number of if, else if, else if, else if, else statements
// in an if block chain.
//
// Another common control block is the switch block.

var value = 'a';

switch (value) {
  case 'a':
    // do something
    break;
  case 'b':
    // never run
    break;
  case 'c':
    // never run
    break;
  default:
    // run if no case matches
    break;
}

// In a switch block, control flow is determined by a matching case statement.  If
// no matching case statement is found, then control moves to the default statement
// (if one exists).  Case and default statements are terminated by the break
// statement.  Omitting a break statement is dangerous because the
// subsequent case blocks are run until either the end of the switch statement or
// when a break statement is encountered.

var value = 'a';

switch (value) {
  case 'a':
    // do something
  case 'b':
    // running now because the previous case statement had no break statement.
  case 'c':
    // running now because the previous case statement had no break statement.
    break;
  default:
    // not run because the previous case statement had a break statement
    break;
}

// Unlike other blocks in javascript, switch must have curly braces.  The following
// would be an error:

/*
switch('a')
  case 'a':
    // errors are thrown.
*/

// Other types of blocks in javascript are loops and functions.  We'll cover those
// next.
