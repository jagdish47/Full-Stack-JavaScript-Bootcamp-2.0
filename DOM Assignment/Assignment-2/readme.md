# Task-1 Output

![Alt Text](./task1Output.png)

```
let accordian = document.querySelectorAll(".accordian h3");

accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let headings = document.querySelectorAll(".accordian-wrapper h3");

headings.forEach((ele) => {
  ele.style.backgroundColor = "#DADAF8";
});

```

# Task-2 Output

![Alt Image](./task2Output.png)

```
const container = document.querySelector(".accordian-wrapper");

const div = document.createElement("div");
div.className = "accordian";

div.innerHTML = `
        <h3>Skills</h3>
        <p>
          I prosses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.
        </p>
`;

console.log(container);

container.append(div);

```
