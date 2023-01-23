let num = 4;

let count = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log("Yess! Prime number");
} else {
  console.log("Noo! Not Prime number");
}
