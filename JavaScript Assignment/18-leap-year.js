// 18. Write a program which tells the number of days in a month, now consider leap year.

let year = 1996;
let month = 2;

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
)
  console.log("Number of days is 31");
else if (
  month == 2 &&
  (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
) {
  console.log("Number of days is 29");
} else if (month == 2) {
  console.log("Number of days is 28");
} else {
  console.log("Number of days is 30");
}
return 0;
