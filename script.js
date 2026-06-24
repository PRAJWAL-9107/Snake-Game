function fillBlocks(){
const bord = document.getElementById("bord");
bord.innerHTML = "";

const bordWidth = bord.clientWidth;
const bordHeight = bord.clientHeight;

const blockSize = 70;

const cols = Math.floor(bordWidth / blockSize);
const rows = Math.floor(bordHeight / blockSize);

const totalBlocks = cols * rows;

for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
            const block = document.createElement("div");
            block.className = "food";
            // block.textContent = i;
            // block.innerText = `${row}-${col}`;
            bord.appendChild(block);
      }
}

}

const snake = document.getElementById("snake");
let x = 0;
let y = 70;
const step = 70;

document.addEventListener("keydown",(e) => {
      if(e.key === "ArrowLeft" && x > 0){x -= step};
      if(e.key ==="ArrowRight"  && x < bord.clientWidth - snake.offsetWidth){x += step};
      if(e.key ==="ArrowUp" && y > 0){y -= step};
      if(e.key ==="ArrowDown" && y > bord.clientHeight - snake.offsetHeight){y += step};

      snake.style.left = x + "px";
      snake.style.top = y + "px";
      console.log(e.key);
});


window.onload = fillBlocks;
window.onresize = fillBlocks;