
       let completedRight = false     
 $(function () {
// hides all thing
    $(".colorType").hide();
    $(".gtime1").hide();
    $("#myBar").hide();
    $("#myProgress").hide();
    

    

    let isFinish = false

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

}

// add click events to all cells
function addClickEventToCells() {
    // on color selection return color:
    const colorDraw = document.getElementById("colorDraw");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {

        cells[i].addEventListener("click", function (event) {
            if(!isFinish){
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorDraw.value;
        }
            cells[i].addEventListener("dblclick", function(){ 
                if(!isFinish){
                let clickedCell = event.target;
                clickedCell.style.backgroundColor = "white" ;
                }
              });
           
        });
        
    }

    
}


    


// on submit of form #sizeDraw:
document.getElementById('sizeDraw').onsubmit = function () {
    formSubmission();
};





// show - hide button

        $('.finshDraw').click(function ( ) {
            isFinish = true


    });
        // start button

        $('.spaceHide').click(function(){
            startClock()
            // Build a default 25x25 grid.
            makeGrid(25, 25);
            $('.wlecom').hide();
            $("#status").text("Drawing Start ...");
            $('.colorType').show();
            $('.guess').hide();
            $('#selectValue2').hide();


        });
    });

    // finsh button

    $('.finshDraw1').click(function(){
        pauseClock()
        // isFinish = false
        $("#status").text("Drawing stop.");
        $('#colorDraw').hide();
        $('.chooColor').hide();
        $('.guess').show();
        $('.colorType').show();
        $('#selectValue2').show();
        $('.finshDraw1').hide();

        $(".gtime1").show();
        $("#myBar").show();
        $("#myProgress").show();

    });
// bar loading
            function move() {
          var elem = document.getElementById("myBar");   
          var width = 0;
          var id = setInterval(frame, 100);
          function frame() {
            if (width == 100) {
                Swal.fire({
                    position: 'center',
                    type: 'warning',
                    title: 'You lost! ، Guess time is over',
                    showConfirmButton: false,
                    timer: 2500
                  })
                // alert('You lost! ، Guess time is over');
              clearInterval(id);

            }
            else if(completedRight){
                elem.style.width = width;
                clearInterval(id);
            }
            else {
              width++; 
              elem.style.width = width + '%'; 
            }
          }
        }

    function getSelect(){

        var select1 = document.getElementById("selectValue1").value;
        console.log(select1);
        
        var select2 = document.getElementById("selectValue2").value;
        console.log(select2);
    
    
        if (select1 !== select2) {
            //  alert('wrong');
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'wrong',
                showConfirmButton: false,
                timer: 2500
              })

            //   completedRight = f
          } 
          else 
          {
 
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'successfully',
                showConfirmButton: false,
                timer: 2500
              })
              completedRight = true
            // alert('successfully');


          }


    }






// timer

var timer=document.getElementById('timer');
var i=0;
let t;
function resetClock(){
i=0;
timer.innerText="Stop Watch";
clearInterval(t);
}

function startClock(){
t=setInterval(function(){
timer.innerText=+i
i++;

},1000)

}

function pauseClock(){
clearInterval(t);


}

function updateTime(){ }


     //refresh button
     function refreshPage(){
        window.location.reload();
    }  