// Assuming you have these variables defined globally or in a suitable scope
const dodger = document.getElementById("dodger");

// Initialize dodger's position if not already set
if (!dodger.style.left) {
    dodger.style.left = "0px";
}

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`; // Correct usage of template literals
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left + 40 < 400) {
        dodger.style.left = `${left + 1}px`; // Correct usage of template literals
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

// Exporting functions if needed (depending on your setup)
// export { moveDodgerLeft, moveDodgerRight };
