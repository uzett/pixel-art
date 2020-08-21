// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()//color = document.getElementById("colorPicker"); //inputID
//canvas = document.getElementById("pixelCanvas"); //tableID
//sizePicker = document.getElementById("sizePicker"); //formID
//height = document.getElementById("inputHeight"); //formID name
//width = document.getElementById("inputWidth"); //formID name

// height and width values extracted out of form for grid
function submitForm() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}


function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop for rows
    for (let h = 0; h < height; h++) {
        grid += '<tr class="row-' + h + '">';
        // loop over cells
        for (let w = 0; w < width; w++) {
            grid += '<td class="cell" id="row-' + h + '_cell-' + w + '"></td>';
        }
        grid += '</tr>';
    }
    // grid adding into html table
    table.innerHTML = grid;

    // adding click event to cells in grid
    clickEvtCells();
}


// click events for all cells in the grid and color returned when clicking cell
function clickEvtCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (var j = 0; j < cells.length; j++) {
        cells[j].addEventListener("click", function (e) {
            var clickedCell = e.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}


// form including #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    submitForm();
};