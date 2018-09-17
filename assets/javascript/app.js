$(document).ready(function() {
    var questionIndex = 0;
    showSlides();

    function showQuestions() {
        var i;
        var questionList = document.getElementsByClassName("question");
        for (i = 0; i < questionList.length; i++) {
            questionList[i].style.display = "none"; 
        }
        questionIndex++;
        if (questionIndex > questionList.length) {questionIndex = 1} 
        questionList[questionIndex-1].style.display = "block"; 
        setTimeout(showQuestions, 2000); // Change image every 2 seconds
    }
});