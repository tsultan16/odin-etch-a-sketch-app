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
            div.style["height"] = `${squareLen}px`; 
            div.style["width"] =  `${squareLen}px`;
            box.appendChild(div);

        }
    }
}


// set up button click event listener (make it clickable only once)
input = document.querySelector(".input-box") 
btn = document.querySelector(".input-btn");
btn.addEventListener("click", (e) => {
    // get grid size from user input
    const n = parseInt(input.value);
    input.value = "";
    // create the grid
    createGrid(n);
}, { once: true })









