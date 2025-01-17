// specify maximum length of box in px 
const maxLen = 500;


function createGrid(n) {
    
    const squareLen = Math.floor(maxLen/n);  
    const boxLen = squareLen * n;

    // set box height and width
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

    // add event listener to trigger drawing during mouse hovering    
    box.addEventListener("mouseover", (e) => {
        target = e.target;
        // change color of tile
        target.classList.add("grid-square-colored");
        //console.log(`Hovering over ${target.id}`);
    });

    // add an erase grid button
    erase = document.createElement("button");
    erase.classList.add("erase-btn");
    erase.textContent = "Erase Grid"
    body.appendChild(erase);
    
    // add event listener to trigger erase
    erase.addEventListener("click", (e) => {
        // reset background color of all tiles
        const tiles = document.querySelectorAll(".grid-square ");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].classList.remove("grid-square-colored");
        }
    });

}


// set up button click event listener 
const input = document.querySelector(".input-box") 
const inputBtn = document.querySelector(".input-btn");
const box = document.querySelector(".container");
const header = document.querySelector(".header");
const body = document.querySelector("body");

inputBtn.addEventListener("click", (e) => {
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
        // remove old grid (by deleting all the tiles)
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
        erase = document.querySelector(".erase-btn")
        if (erase) {
            erase.remove();
        }

        // create new grid
        createGrid(n);
    } 
    input.value = "";
}, { once: false })









