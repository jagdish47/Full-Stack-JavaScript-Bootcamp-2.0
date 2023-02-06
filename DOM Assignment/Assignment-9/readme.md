# Task-1 Output

![Alt image](./ass9.1-before.png)
![Alt image](./ass9.1-after.png)

```
// Changing style of title
const title = document.querySelector(".caption .title");
// console.log(title);
title.style.color = "red";
title.style.fontFamily = "sans-serif";

```

# Task-2 Output

![Alt image](./ass9.2-before.png)
![Alt image](./ass9.2-after.png)

```
// Applying Hover effect
let btn = document.querySelector(".add-to-cart");

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
});

```
