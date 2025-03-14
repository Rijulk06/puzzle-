const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

// Maze grid (1 = wall, 0 = path)
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Player position
let player = { x: 1, y: 1 };

// Chocolate position
const goal = { x: 8, y: 8 };

const tileSize = 40;
const winMessage = document.getElementById("win-message");

// Draw maze
function drawMaze() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 1) {
                ctx.fillStyle = "#ff9999";
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
    }
}

// Draw player
function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

// Draw chocolate
function drawChocolate() {
    ctx.fillStyle = "brown";
    ctx.fillRect(goal.x * tileSize, goal.y * tileSize, tileSize, tileSize);
}

// Update game
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawChocolate();
    drawPlayer();

    // Check if player reached chocolate
    if (player.x === goal.x && player.y === goal.y) {
        winMessage.classList.remove("hidden");
    }
}

// Move player
function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    if (maze[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
    }
    updateGame();
}

// Handle key press
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") movePlayer(0, -1);
    if (event.key === "ArrowDown") movePlayer(0, 1);
    if (event.key === "ArrowLeft") movePlayer(-1, 0);
    if (event.key === "ArrowRight") movePlayer(1, 0);
});

// Start game
updateGame();
