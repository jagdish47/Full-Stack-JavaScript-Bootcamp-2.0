// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
let n = 100;

for (let i = 0; i <= n; i++) {
  let count = 0;
  for (let j = 0; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log(i);
  }
}
