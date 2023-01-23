// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sortArr = ages.sort(function (a, b) {
  return a - b;
});

console.log("maximum age : ", ages[ages.length - 1]);
console.log("minimum age : ", ages[0]);

// Find the median age(one middle item or two middle items divided by two)

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

console.log(sum / 2);

// - Find the average age(all items divided by number of items)
console.log(sum / ages.length);
