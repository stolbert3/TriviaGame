$(document).ready(function() {
    var i = 0;
    var quizScore = 0;
    var userResponse = '';
    var correctAnswer = '';
    const quizQuestions = [{   
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

    //on click of start button, showQuestions();
    $('#startButton').on('click', function() {
        $('.button').hide(); //hide start button
        console.log("Game Started");
        $('.quizQuestion').style.visibility = 'visible';
        showQuestions(); //makes first set of questions appear
        //start timer
    });

    $('#buttonA').on('click', function() {
        userResponse = "A";
    })

    $('#buttonB').on('click', function() {
        userResponse = "B";
    })

    $('#buttonC').on('click', function() {
        userResponse = "C";
    })

    $('#buttonD').on('click', function() {
        userResponse = "D";
    })

    
    $('.answer').on('click', function() {
        //stop timer
        correctAnswer = quizQuestions[i].answer; //pull correct answer from question array
        console.log("userResponse" + userResponse);

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
            var possibleScore = quizQuestions.length;
            $(".finalScore").text(quizScore + "/" + possibleScore);
        }
    });

    function showQuestions() { //writes question and answers into divs
        $("#question").text(quizQuestions[i].prompt);
        $("#buttonA").text(quizQuestions[i].choices[0]);
        $("#buttonB").text(quizQuestions[i].choices[1]);
        $("#buttonC").text(quizQuestions[i].choices[2]);
        $("#buttonD").text(quizQuestions[i].choices[3]);
        console.log("looped");
        console.log(i);
        //start timer

    };

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