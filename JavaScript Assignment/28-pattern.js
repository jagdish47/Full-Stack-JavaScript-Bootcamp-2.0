// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//      *****

for (let i = 0; i < 5; i++) {
  let add = "";
  for (let j = 0; j <= i; j++) {
    add += "* ";
  }
  console.log(add);
}
// --------------
for (let i = 0; i < 5; i++) {
  let add = "";
  for (let j = 0; j < 5; j++) {
    add += "* ";
  }
  console.log(add);
}
// --------------
for (let i = 1; i <= 5; i++) {
  let bag = "";

  for (let j = 1; j <= 5 - i; j++) {
    bag += " ";
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    bag += "*";
  }

  console.log(bag);
}
