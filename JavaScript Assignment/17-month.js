// 17. Write a program which tells the number of days in a month.
// January - 31 days
// February - 28 days in a common year and 29 days in leap years
// March - 31 days
// April - 30 days
// May - 31 days
// June - 30 days
// July - 31 days
// August - 31 days
// September - 30 days
// October - 31 days
// November - 30 days
// December - 31 days
let month = "March";

if (
  month == "January" ||
  month == "March" ||
  month == "May" ||
  month == "July" ||
  month == "August" ||
  month == "October" ||
  month == "December"
) {
  console.log("31 days");
} else if (month == "February") {
  console.log("28 Days");
} else {
  console.log("30 Days");
}
