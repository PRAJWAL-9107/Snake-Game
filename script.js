let block = document.getElementById(".bord");

for (let i = 0; i < 10; i++){
      const newBlock = document.createElement("div");
      newBlock.classList.add("newBlock");
      newBlock.id = "block"
      block.appendChild(newBlock);
}