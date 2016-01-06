$.ajax({
    url: "http://104.131.17.187:4004/sudoku",
    success: function(resp,text,xhr){
        for (var r = 0; r < 9; r++){
            for (var c = 0; c < 9; c++){
                if(resp[r][c] != ""){
                  var cellid = "#r"+r+"c"+c;
                    $(cellid).html(resp[r][c]);
                }
            } 
        }
    }
});
       
function loadUserBoard(){ 
        var result =[
            new Array(9), new Array(9), new Array(9), 
            new Array(9), new Array(9), new Array(9),
            new Array(9), new Array(9), new Array(9)
    ];
    for (var r = 0; r < 9; r++){
        for (var c = 0; c < 9; c++){
            var cellid = "#r"+r+"c"+c;
            var cellValue;
            if ($(cellid).find("input")[0]){
                cellValue = 
    $(cellid).find("input").val();
                }
                else{
                    cellValue = $(cellid).html();
       }
       result[r][c] = cellValue;
    }
}
return result;
       }

function validate(){
    var userInput = loadUserBoard()
    var board = new Sudoku(userInput);
    var userWasRight = board.isValid();
    if (userWasRight) {alert("AWESOME!");}
    else {alert("Sorry, try again!")}
}