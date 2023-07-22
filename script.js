const board = document.querySelector(".board")

// create grids inside of our board
function creategrid(squares) {
    // creates our row
    for (let i = 1; i <= squares; i++) {
        // creates our column
        for (let j = 1; j <= squares; j++) {
            const grid = document.createElement("div")

            // add a class to apply styling
            grid.classList.add("grid")

            // calculate the size of each div (500 is the size of the board)
            let size = 500 / squares
            grid.style.width = size + "px"
            grid.style.height = size + "px"

            board.appendChild(grid)
        }
    }
}

creategrid(16)