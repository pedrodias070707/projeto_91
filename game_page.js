var question_turn = "player1";
var answer_turn = "player2";

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Resposte : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value='';
    document.getElementById("number2").value='';
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
}
