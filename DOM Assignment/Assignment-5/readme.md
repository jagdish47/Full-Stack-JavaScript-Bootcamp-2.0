# Task Output

![Alt Image](./Output/DOM%20P2%20SS.png)

```
// Adding Button
const container1 = document.querySelector(".nav-links").nextElementSibling;
console.log(container1);
const Subscription = document.createElement("a");
Subscription.setAttribute("href", "index.html");
Subscription.classList.add("btn");
Subscription.textContent = "Pro Subscription";

container1.append(Subscription);

//Adding Chinese
const container2 = document.querySelector(".tags-container :nth-child(2)");
console.log(container2);
const chinese = document.createElement("a");
chinese.setAttribute("href", "#");
chinese.textContent = "Chinese (7)";

container2.append(chinese);

//Adding Card
const container3 = document.querySelector(".recipe-gallery");

const div = document.createElement("div");
div.classList.add("card");

div.innerHTML = `
    <a href="#" class="recipe-text">
    <img src="./img/recipe-1.jpeg" class="recipe-img" />
    <h5 class="recipe-name">Added 6th Card using DOM</h5>
    <p class="recipe-disp">Prep : 15min | Cook : 30min</p>
    </a>
`;

container3.appendChild(div);


```
