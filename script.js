function fillBlocks(){
const bord = document.getElementById("bord");
bord.innerHTML = "";

const bordWidth = bord.clientWidth;
const bordHeight = bord.clientHeight;


const blockSize = 70;

const cols = Math.floor(bordWidth / blockSize);
const rows = Math.floor(bordHeight / blockSize);

const totalBlocks = cols * rows;

for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
            const block = document.createElement("div");
            block.className = "food";
            // block.textContent = i;
            block.innerText = `${row}-${col}`;
            bord.appendChild(block);
      }
}
}

window.onload = fillBlocks;
window.onresize = fillBlocks;