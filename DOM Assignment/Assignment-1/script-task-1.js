// selecting ul
const ul = document.querySelector("ul");

// selecting inside ul last li than a tag
const projects = document.querySelector("ul li:last-child a");
projects.textContent = "Projects";

const li = document.createElement("li");
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Hire me";

li.append(a);
ul.append(li);
