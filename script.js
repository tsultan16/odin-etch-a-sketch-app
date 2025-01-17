// specify maximum length of box in px 
const maxLen = 500;


function createGrid(n) {
    
    const squareLen = Math.floor(maxLen/n);  
    const boxLen = squareLen * n;

    // set box height and width
    const box = document.querySelector(".container");
    box.style["height"] = `${boxLen}px`; 
    box.style["width"] =  `${boxLen}px`;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-square");
            div.id = `tile-${n * i + j}`
            div.style["height"] = `${squareLen}px`; 
            div.style["width"] =  `${squareLen}px`;
            box.appendChild(div);

        }
    }

    box.addEventListener("mouseover", (e) => {
        target = e.target;
        // change color of tile
        target.style.backgroundColor = "red";
        //console.log(`Hovering over ${target.id}`);
    });
}


// set up button click event listener (make it clickable only once)
input = document.querySelector(".input-box") 
btn = document.querySelector(".input-btn");
header = document.querySelector(".header");

btn.addEventListener("click", (e) => {
    // get grid size from user input
    const n = parseInt(input.value);
    
    if ((n <= 0) || (n > 100)) {
        const msg = document.createElement("div");
        msg.textContent = "Need to enter a number between 1 and 100. Try again!";
        msg.style.color = "red";
        msg.classList.add("input-msg");
        header.appendChild(msg);

    } else {
        msg = document.querySelector(".input-msg");
        if (msg != null){
            msg.remove();
        }
        // create the grid
        createGrid(n);
    } 
    input.value = "";
}, { once: false })









