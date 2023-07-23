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

// Set up mouse drag effect so that the grid divs change color
board.addEventListener("mouseenter", (e) => {
    const grids = document.querySelectorAll(".grid")

    // set drag var to be false
    let drag = false

    grids.forEach(grid => {

        // when we click down with our mouse, set drag to be true
        grid.addEventListener("mousedown", (e) => drag = true)

        // when we move our mouse, if drag is true, set the color of each square
        grid.addEventListener("mousemove", (e) => {
            if (drag === true) {
                e.target.style.backgroundColor = "black"
            }
        })

        // letting go of the mouse will set drag back to false
        grid.addEventListener("mouseup", (e) => drag = false)
    })
})

// when user clicks on resize button
resize.addEventListener("click", (e) => {

    // prompt user to enter number of squares
    let user = prompt("How many squares per side? (Max is 100)")

    // checking for valid input
    while (true) {
        // if the user clicks the cancel button, break out of the function
        if (user === null) {
            return
        }

        if (user < 1 || user > 100) {
            alert("Number must be between 1-100!")
        } else {
            break
        }
        user = prompt("How many squares per side? (Max is 100)")
    }

    // existing grid is removed
    const grids = document.querySelectorAll(".grid")
    grids.forEach(grid => {
        // for each square, remove it from the board
        board.removeChild(grid)
    })

    // creating a new grid based on user input
    creategrid(user)
})