// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let contries = ["INDIA", "BANGLADESH", "AUSTRALIA", "ETHIOPIA"];

let flag = true;
for (let i = 0; i < contries.length; i++) {
  if (contries[i] == "ETHIOPIA") {
    console.log("ETHIOPIA");
    break;
  } else {
    flag = false;
  }
}

if (flag == false) {
  contries.push("Ethiopia");
}
