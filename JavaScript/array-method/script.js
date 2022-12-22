const nums = [5, 3, 67, 3, 76, , 3, 67, 3, 5, 10];
const animals = ["cat", "dog", "bat", "lion", "tiger"];

// includes()
console.log(nums.includes(10)); //true
console.log(animals.includes("sparrow")); //false

//indexOf()
console.log(nums.indexOf(5)); //0
console.log(nums.indexOf(4545)); //-1
console.log(animals.indexOf("tiger")); //4

//Array.isArray(nameOfArray);
console.log(Array.isArray(nums)); //true
console.log(Array.isArray(animals)); //true

//join()
const strAnimals = animals.join(" ");
console.log(strAnimals); //cat dog bat lion tiger

//lastIndexOf()
console.log(nums.lastIndexOf(5)); //9
console.log(nums.lastIndexOf(4345)); //-1

//push
nums.push(143);
console.log(nums); //5, 3, 67, 3, 76, , 3, 67, 3, 5, 10, 143

// pop()
nums.pop();
console.log(nums); //5, 3, 67, 3, 76, , 3, 67, 3, 5, 10

// unshift()
animals.unshift("snake");
console.log(animals); //['snake', 'cat', 'dog', 'bat', 'lion', 'tiger']

// shift()
animals.shift();
console.log(animals); //['cat', 'dog', 'bat', 'lion', 'tiger']

// slice()
const one = animals.slice(2, 4);
console.log(one); //(2) ['bat', 'lion']

const two = animals.slice(0);
console.log(two); //(5) ['cat', 'dog', 'bat', 'lion', 'tiger']

const three = animals.slice(-3);
console.log(three); //(3) ['bat', 'lion', 'tiger']

// concat();
const newArr = nums.concat(animals);
console.log(newArr); //[5, 3, 67, 3, 76, empty, 3, 67, 3, 5, 10, 'cat', 'dog', 'bat', 'lion', 'tiger']

// findIndex()
const front = nums.findIndex((ele) => {
  return ele > 70;
});

console.log(front); //4

// findLast()
const rear = nums.findLast((ele) => {
  return ele > 70;
});

console.log(rear); //76

// findLastIndex()
const last = nums.findLastIndex((ele) => {
  return ele > 70;
});

console.log(last);

// forEach()
animals.forEach((ele) => {
  console.log(ele);
});
// cat
// dog
// bat
// lion
// tiger

//filter()
const result = nums.filter((ele) => {
  return ele % 2 == 0;
});
console.log(result); //76, 10

// Map()

const doubleArr = nums.map((ele) => {
  return ele * 2;
});

console.log(doubleArr); //[10, 6, 134, 6, 152, empty, 6, 134, 6, 10, 20]

// reduce()
const sum = nums.reduce((acc, ele) => {
  return acc + ele;
});
console.log(sum); //242

// reverse()
const reversedArr = animals.reverse();
console.log(reversedArr); //['tiger', 'lion', 'bat', 'dog', 'cat']
