
        
 $(function () {

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

                // $("#status").text("Drawing stop.");
        // $('.space').show();
    
        // $('.space').hide();
    });
    
        $('.spaceHide').click(function(){
            // Build a default 25x25 grid.
            makeGrid(25, 25);
            $('.wlecom').hide();
            $("#status").text("Drawing Start ...");
            $('.colorType').show();
            $('.guess').hide();
            $('#selectValue2').hide();
            // $('.colorType').show();
            // $('.colorType').show();


            // $('#status').css("display","block");
            // $('.chooColor').css("display","block");
            // $('#colorDraw').css("display","block");
            // $('.finshDraw').css("display","block");
            // $('.finshDraw1').css("display","block");
            // $('#pixelDraw').css("display","block");
            // $('.guess').css("display","block");
            // $('.chooColor').css("display","block");

            // $('#colorDraw').css("text-align","center");


            // alert('clicked')
            // makeGrid(height, width);


        });
    });
    $('.finshDraw1').click(function(){
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

    function getSelect(){

        var select1 = document.getElementById("selectValue1").value;
        console.log(select1);
        
        var select2 = document.getElementById("selectValue2").value;
        console.log(select2);
    
    
        if (select1 !== select2) {
             alert('wrong');
          } 
          
          else 
          {
            alert('successfully');
          }
        // var select1 = document.getElementById("selectValue1").value;
        // console.log(select1);
            // getSelect()

    // function getSelect1()
    // {

    // }
    // getSelect1();

    // function getSelect2()
    // {
    //     console.log(select2);
    // }
    // getSelect2();
// function mattt()
//     if (){
//         select1 == select2
//         alert("good")
//     }else
//     {
//         alert("bad") 
//     }
//     mattt();



    }