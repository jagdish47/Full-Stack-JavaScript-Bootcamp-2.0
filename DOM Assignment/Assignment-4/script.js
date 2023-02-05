const cards = document.querySelectorAll(".clearfix");

console.log(cards);

cards.forEach((ele) => {
  ele.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
});

function getRandom() {
  let random = Math.floor(Math.random() * 256);
  return random;
}

const stat = document.querySelectorAll(".stat");
const statValue = document.querySelectorAll(".stat-value");

for (let i = 0; i < stat.length; i++) {
  statValue[i].style.color = "white";
  stat[i].style.color = "white";
}
