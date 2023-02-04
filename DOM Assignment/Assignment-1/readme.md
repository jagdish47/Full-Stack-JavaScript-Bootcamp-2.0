# Task-1 :- Output

![Project](./task1Output.png)

```
// selecting ul
const ul = document.querySelector("ul");

// selecting inside ul last li than a tag
const projects = document.querySelector("ul li:last-child a");
projects.textContent = "Projects";

const li = document.createElement("li");
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Hire Me";

li.append(a);
ul.append(li);
```

# Task-2 :- Output

![Project](./task2Output.png)

```
const searchDiv = document.querySelector(".search-field input");
searchDiv.placeholder = "Search My Project";

const removeIcon = document.querySelector("footer ul");
removeIcon.style.display = "none";
```

# Task-3 :- Output

![Project](./task3Output.png)

```
const project = document.querySelector("ul li:last-child a");
project.textContent = "Projects";
```

# Task-4 :- Output

![Project](./task4Output.png)

```
let avatarDiv = document.querySelector(".hero-right-section img");

avatarDiv.setAttribute("src", "./spider-man.jpeg");
```

# Task-5 :- Output

![Project](./task5Output.png)

```
const button = document.createElement("button");
button.textContent = "Support Me";

const buttonDiv = document.querySelector(".hero-right-section-btns");

buttonDiv.append(button);
```
