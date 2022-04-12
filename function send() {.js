function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
}


function check(){
    get_answer = document.getElement("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;        
        }
        else
        {
            update_player2_score = update_player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;

        }

        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + update_player2_name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + update_player1_name;

        }
    }
}
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
