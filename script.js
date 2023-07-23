const board = document.querySelector(".board")
const resize = document.querySelector(".resize")

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

// Set up a “hover” effect so that the grid divs change color
board.addEventListener("mouseenter", (e) => {
    const grids = document.querySelectorAll(".grid")

    grids.forEach(grid => {

        grid.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black"
        })
    })
})