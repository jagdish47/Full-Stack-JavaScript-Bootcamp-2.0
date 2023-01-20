// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(date.getFullYear());

console.log(date.getMonth());

console.log(date.getDate());

console.log(date.getUTCDay());

console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.getTime() / 1000);
