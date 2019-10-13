function buttonGuess() {
    document.getElementById("demo").innerHTML = "h";
  }







function makeGrid(height, width) {
    const table = document.getElementById("pixelDraw");
    let grid = '';

    // loop over each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}

// gets values for height and width from form and uses them to call sizeDraw()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('drawHeight').value;
    const width = document.getElementById('drawWidth').value;
    makeGrid(height, width);
}

// add click events to all cells
function addClickEventToCells() {
    // on color selection return color:
    const colorDraw = document.getElementById("colorDraw");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorDraw.value;
        });
    }
}



// on submit of form #sizeDraw:
document.getElementById('sizeDraw').onsubmit = function () {
    formSubmission();
};

// Build a default 10x10 grid.
makeGrid(25, 25);



// show - hide button

$(function () {

    $('.showButton').click(function ( ) {
    
    $('.hidden').show();
    
    $('.show').hide();
    
    });
    
    $('.hideButton').click(function () {
        $("h3").text("Stop");

    $('.hidden').hide();
    
    $('.show').show();
    
    });
    
    });