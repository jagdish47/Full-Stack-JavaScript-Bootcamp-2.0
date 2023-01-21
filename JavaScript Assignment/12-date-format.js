// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();

let day = date.getDay();
let mon = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();

console.log(`${year}-${mon + 1}-${day} ${hour}:${min}`);
console.log(`${day}-${mon}-${year} ${hour}:${min}`);
console.log(`${day}/${mon}/${year} ${hour}:${min}`);
