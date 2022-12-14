var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');
var question_eleven = document.getElementById('question-11');
var question_twelve = document.getElementById('question-12');
var question_thirteen = document.getElementById('question-13');
var question_fourteen = document.getElementById('question-14');
var question_fifteen = document.getElementById('question-15');
var question_sixteen = document.getElementById('question-16');
var question_seventeen = document.getElementById('question-17');
var question_eighteen = document.getElementById('question-18');
var question_nineteen = document.getElementById('question-19');
var question_twenty = document.getElementById('question-20');


function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        console.log(event.target.value);
        answers[`question${question_number}`] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event) {
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event) {
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event) {
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event) {
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event) {
    storeAnswer(5, event)
})
question_six.addEventListener('click', function(event) {
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function(event) {
    storeAnswer(7, event)
})
question_eight.addEventListener('click', function(event) {
    storeAnswer(8, event)
})
question_nine.addEventListener('click', function(event) {
    storeAnswer(9, event)
})
question_ten.addEventListener('click', function(event) {
    storeAnswer(10, event)
})
question_eleven.addEventListener('click', function(event) {
    storeAnswer(11, event)
})
question_twelve.addEventListener('click', function(event) {
    storeAnswer(12, event)
})
question_thirteen.addEventListener('click', function(event) {
    storeAnswer(13, event)
})
question_fourteen.addEventListener('click', function(event) {
    storeAnswer(14, event)
})
question_fifteen.addEventListener('click', function(event) {
    storeAnswer(15, event)
})
question_sixteen.addEventListener('click', function(event) {
    storeAnswer(16, event)
})
question_seventeen.addEventListener('click', function(event) {
    storeAnswer(17, event)
})
question_eighteen.addEventListener('click', function(event) {
    storeAnswer(18, event)
})
question_nineteen.addEventListener('click', function(event) {
    storeAnswer(19, event)
})
question_twenty.addEventListener('click', function(event) {
    storeAnswer(20, event)
})

function totalScore() {
    var total_score =
        answers.question1 +
        answers.question2 +
        answers.question3 +
        answers.question4 +
        answers.question5 +
        answers.question6 +
        answers.question7 +
        answers.question8 +
        answers.question9 +
        answers.question10 +
        answers.question10 +
        answers.question12 +
        answers.question13 +
        answers.question14 +
        answers.question15 +
        answers.question16 +
        answers.question17 +
        answers.question18 +
        answers.question19 +
        answers.question20;


    return total_score;
}

function getInfoBasedOnScore() {
    if (totalScore() < 10) {
        var score_info = "Você precisa tomar mais cuidado com a segurança!";
    } else if (totalScore() > 10) {
        var score_info = "Parabéns! Você está bem de segurança!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');
var submit11 = document.getElementById('submit11');
var submit12 = document.getElementById('submit12');
var submit13 = document.getElementById('submit13');
var submit14 = document.getElementById('submit14');
var submit15 = document.getElementById('submit15');
var submit16 = document.getElementById('submit16');
var submit17 = document.getElementById('submit17');
var submit18 = document.getElementById('submit18');
var submit19 = document.getElementById('submit19');
var submit20 = document.getElementById('submit20');

function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function() {
    nextQuestion(2);
    growProgressBar('5%');
})
submit2.addEventListener('click', function() {
    nextQuestion(3);
    growProgressBar('10%');
})
submit3.addEventListener('click', function() {
    nextQuestion(4);
    growProgressBar('15%');
})
submit4.addEventListener('click', function() {
    nextQuestion(5);
    growProgressBar('20%');
})
submit5.addEventListener('click', function() {
    nextQuestion(6);
    growProgressBar('25%');
})
submit6.addEventListener('click', function() {
    nextQuestion(7);
    growProgressBar('30%');
})
submit7.addEventListener('click', function() {
    nextQuestion(8);
    growProgressBar('35%');
})
submit8.addEventListener('click', function() {
    nextQuestion(9);
    growProgressBar('40%');
})
submit9.addEventListener('click', function() {
    nextQuestion(10);
    growProgressBar('45%');
})
submit10.addEventListener('click', function() {
    nextQuestion(11);
    growProgressBar('50%');
})
submit11.addEventListener('click', function() {
    nextQuestion(12);
    growProgressBar('55%');
})
submit12.addEventListener('click', function() {
    nextQuestion(13);
    growProgressBar('60%');
})
submit13.addEventListener('click', function() {
    nextQuestion(14);
    growProgressBar('65%');
})
submit14.addEventListener('click', function() {
    nextQuestion(15);
    growProgressBar('70%');
})
submit15.addEventListener('click', function() {
    nextQuestion(16);
    growProgressBar('75%');

})
submit16.addEventListener('click', function() {
    nextQuestion(17);
    growProgressBar('80%');

})
submit17.addEventListener('click', function() {
    nextQuestion(18);
    growProgressBar('85%');

})
submit18.addEventListener('click', function() {
    nextQuestion(19);
    growProgressBar('90%');

})
submit19.addEventListener('click', function() {
    nextQuestion(20);
    growProgressBar('95%');

})
submit20.addEventListener('click', function() {
    nextQuestion(21);
    growProgressBar('100%');

})

submit20.addEventListener('click', function() {
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}