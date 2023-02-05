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
