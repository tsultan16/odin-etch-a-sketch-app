// number of div tiles per side
let n = 5;
const SQUARE_BORDER = 1; // square border size in px

// maximum length of box in px 
const maxLen = 500;
const squareLen = Math.floor(maxLen/n);  
const boxLen = (squareLen) * n; // account for tile border size

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







