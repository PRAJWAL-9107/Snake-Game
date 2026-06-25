
const board = document.getElementById("board");
const scoreText = document.getElementById("score");

let speed = 250;
let gameLoop;

const rows = 20;
const cols = 20;

let snake = [
      { x: 10, y: 10 }
];

let food = {};
let score = 0;

let direction = "RIGHT";
let gameOver = false;

function randomFood() {

      while (true) {

            let newFood = {
                  x: Math.floor(Math.random() * cols),
                  y: Math.floor(Math.random() * rows)
            };

            let onSnake = snake.some(
                  part => part.x === newFood.x && part.y === newFood.y
            );

            if (!onSnake) {
                  food = newFood;
                  break;
            }
      }
}

function draw() {

      board.innerHTML = "";

      snake.forEach((part, index) => {

            const cell = document.createElement("div");

            cell.classList.add("snake");

            if (index === 0) {
                  cell.classList.add("head");
            }

            cell.style.gridColumnStart = part.x + 1;
            cell.style.gridRowStart = part.y + 1;

            board.appendChild(cell);
      });

      const foodCell = document.createElement("div");

      foodCell.classList.add("food");
      foodCell.style.gridColumnStart = food.x + 1;
      foodCell.style.gridRowStart = food.y + 1;

      board.appendChild(foodCell);
}

function move() {

      if (gameOver) return;

      const head = {
            ...snake[0]
      };

      switch (direction) {

            case "UP":
                  head.y--;
                  break;

            case "DOWN":
                  head.y++;
                  break;

            case "LEFT":
                  head.x--;
                  break;

            case "RIGHT":
                  head.x++;
                  break;
      }

      // Wall collision
      if (
            head.x < 0 ||
            head.x >= cols ||
            head.y < 0 ||
            head.y >= rows
      ) {
            endGame();
            return;
      }

      // Self collision
      if (
            snake.some(
                  part => part.x === head.x && part.y === head.y
            )
      ) {
            endGame();
            return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {

            score++;
            scoreText.textContent = "Score: " + score;

            // Increase speed by 2 ms each food
            speed = Math.max(120, speed - 10);

            clearInterval(gameLoop);
            gameLoop = setInterval(move, speed);

            randomFood();

      } else {
            snake.pop();
      }
      draw();
}

function endGame() {

      gameOver = true;

      setTimeout(() => {
            alert("Game Over! Score: " + score);

            snake = [{ x: 10, y: 10 }];
            direction = "RIGHT";
            score = 0;
            scoreText.textContent = "Score: 0";
            gameOver = false;

            randomFood();
            draw();

      }, 100);
}

document.addEventListener("keydown", (e) => {

      if (e.key === "ArrowUp" && direction !== "DOWN") {
            direction = "UP";
      }

      if (e.key === "ArrowDown" && direction !== "UP") {
            direction = "DOWN";
      }

      if (e.key === "ArrowLeft" && direction !== "RIGHT") {
            direction = "LEFT";
      }

      if (e.key === "ArrowRight" && direction !== "LEFT") {
            direction = "RIGHT";
      }
});

randomFood();
draw();

gameLoop = setInterval(move, speed);
