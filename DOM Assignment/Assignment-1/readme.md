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

# Task-3 :- Output

![Project](./task3Output.png)

# Task-4 :- Output

![Project](./task4Output.png)

# Task-5 :- Output

![Project](./task5Output.png)
