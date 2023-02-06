// Changing style of title
const title = document.querySelector(".caption .title");
// console.log(title);
title.style.color = "red";
title.style.fontFamily = "sans-serif";

// Applying Hover effect
let btn = document.querySelector(".add-to-cart");

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
});
