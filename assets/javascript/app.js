$(document).ready(function() {
    var questionIndex = 0;
    var quizScore = 0;
    var timerCount = 30;
    var quizQuestions = [
        {
            prompt: "Question 1",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "(a)"
        },
        {
            prompt: "Question 2",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "(b)"
        },
        {
            prompt: "Question 3",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "(c)"
        },
        {
            prompt: "Question 4",
            choices: ["(a)", "(b)", "(c)", "(d)"],
            answer: "(d)"
        }
    ];

    var possibleScore = quizQuestions.length;

    /*on click of start button, showQuestions();*/
    $('#startButton').on('click', function() {
        $('#startButton').empty();
        console.log("Game Started");
        showQuestions();
    });

    function showQuestions() {
        for (var i=0; i < quizQuestions.length; i++) {
            $("#question").text(quizQuestions[i].prompt);
            $("#buttonA").text(quizQuestions[i].choices[0]);
            $("#buttonB").text(quizQuestions[i].choices[1]);
            $("#buttonC").text(quizQuestions[i].choices[2]);
            $("#buttonD").text(quizQuestions[i].choices[3]);

            /*start timer*/

            gradeQuestion();

            questionIndex++;
        };
    };

    function gradeQuestion() {
        var userResponse = $(".answer").click();
        if (userResponse === quizQuestions[questionIndex].answer) {
            quizScore ++;
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    };

    $(".quizQuestion").empty();
    $(".timer").empty();
    $(".finalScore").text(quizScore + "/" + possibleScore);
    /*add restart button*/

});

        /*var i;
        var questionList = document.getElementsByClassName("question");
        for (i = 0; i < questionList.length; i++) {
            questionList[i].style.display = "none"; 
        }
        questionIndex++;
        if (questionIndex > questionList.length) {questionIndex = 1} 
        questionList[questionIndex-1].style.display = "block"; 
        setTimeout(showQuestions, 2000); // Change image every 2 seconds
    }
    
    var possibleScore = quizQuestions.length;

    for (var i=0; i < quizQuestions.length; i++) {
        var userResponse = window.prompt(quizQuestions[i].prompt);
        if (userResponse === quizQuestions[i].answer) {
            quizScore ++;
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    };

    alert("You got " + quizScore + "/" + possibleScore);


$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
});*/