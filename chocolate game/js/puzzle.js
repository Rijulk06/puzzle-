const canvas = document.getElementById("puzzleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

const img = new Image();
img.src = "../images/puzzle.jpg"; // Your image

img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    setTimeout(shuffle, 2000);
};

function shuffle() {
    alert("Now solve the puzzle to see your surprise! ❤️");
}
