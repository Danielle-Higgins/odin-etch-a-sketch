const board = document.querySelector(".board")

// create a 16 x 16 grid inside of our board
function creategrid(squares) {
    for (let i = 1; i <= squares; i++) {
        for (let j = 1; j <= squares; j++) {
            const grid = document.createElement("div")
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