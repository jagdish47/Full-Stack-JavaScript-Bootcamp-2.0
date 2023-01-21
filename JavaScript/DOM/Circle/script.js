let completeScreen = document.querySelector(".screen");

completeScreen.addEventListener("click", doActivity);

function doActivity() {
  let rand = Math.trunc(Math.random() * 100);

  const div = document.createElement("div");
  div.classList.add("circle");
  //   div.style.height = "100px";
  //   div.style.widows = "100px";
  //   div.style.backgroundColor = "pink";

  div.style.backgroundColor = `rgb(0, ${rand}, ${rand})`;
  completeScreen.append(div);

  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}
