function fillBlocks(){
const bord = document.getElementById("bord");
bord.innerHTML = "";

const bordWidth = bord.clientWidth;
const bordHeight = bord.clientHeight;
console.dir(bord)
const blockSize = 54;

const col = Math.floor(bordWidth / blockSize);
const row = Math.floor(bordHeight / blockSize);

const totalBlocks = col * row;

for (let i = 1; i <= totalBlocks; i++) {
      const block = document.createElement("div");
      block.className = "food";
      block.textContent = i;
      bord.appendChild(block);
}
}

window.onload = fillBlocks;
window.onresize = fillBlocks;