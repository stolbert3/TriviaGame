$(document).ready(function() {
    var i = 0;
    var quizScore = 0;
    var userResponse = '';
    var correctAnswer = '';
    var quizQuestions = [{   
            prompt: "Question 1",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "A"
        },
        {
            prompt: "Question 2",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "B"
        },
        {
            prompt: "Question 3",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "C"
        },
        {
            prompt: "Question 4",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "D"
    }];

    var possibleScore = quizQuestions.length;

    //on click of start button, showQuestions();
    $('#startButton').on('click', function() {
        //hide start button
        console.log("Game Started");
        showQuestions(); //makes first set of questions appear
        //start timer
    });

    
    $('.answer').on('click', function() {
        //stop timer
        correctAnswer = quizQuestions[i].answer; //pull correct answer from question array
        getCheckedValue(); //checks the user input value automatically
        console.log(userResponse);

        gradeQuestion(); //compares correct answer to user answer
        //reset radio checks

        if (i < quizQuestions.length - 1) { //if there are more questions, load them automatically when the current question is answered
            i++;
            showQuestions();
            console.log("answered");
            console.log(i);
            console.log("correctAnswer" + correctAnswer);
        }
    
        else { //if no more questions, alert game over and give the final score
            alert("Game Over!");
            $(".quizQuestion").empty();
            $(".timer").empty();
            $(".finalScore").text(quizScore + "/" + possibleScore);
        }
    });

    function showQuestions() { //writes question and answers into divs
        $("#question").text(quizQuestions[i].prompt);
        $("#A").text(quizQuestions[i].choices[0]);
        $("#B").text(quizQuestions[i].choices[1]);
        $("#C").text(quizQuestions[i].choices[2]);
        $("#D").text(quizQuestions[i].choices[3]);
        console.log("looped");
        console.log(i);
        //start timer

    };

    function getCheckedValue(){
        var radios = document.getElementsByName("radio"); // Get radio group by-name
        for(var y=0; y<radios.length; y++) {
            if(radios[y].checked){
                userResponse = radios[y].value; //return value of radio that was checked
            }
        }
    }

    function gradeQuestion() { //compare user response to correct answer
        if (userResponse === correctAnswer) {
            quizScore ++;
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    };
    /*add restart button*/

});