(function() {
    // quiz begins, no correct answers
    var correct = 0;
    var answer = '';
    var questionCount = 0;

    // Binding ui elements
    var resetButton = document.getElementById('reset');
    var submitAnswerButton = document.getElementById('submitAnswer');
    var answerBox = document.getElementById('answerBox');
    var questionBox = document.getElementById('question');

    // array of questions and corresponding answers
    var questions = [{
        'question': 'Name a programming language that\'s also a gem',
        'answer': 'Ruby'
    }, {
        'question': 'Name a programming language that\'s also a snake',
        'answer': 'Python'
    }, {
        'question': 'What language do you use to style web pages?',
        'answer': 'CSS'
    }, {
        'question': 'What language do you use to build the structure of web pages?',
        'answer': 'HTML'
    }, {
        'question': 'What language do you use to add interactivity to a web page?',
        'answer': 'JavaScript'
    }];


    var init = function() {
        // initialise event listeners
        resetButton.addEventListener('click', start);
        submitAnswerButton.addEventListener('click', answerQuestion);
        answerBox.addEventListener('keypress', function(e) {
            var key = e.which || e.keyCode;
            if (13 === key) {
                answerQuestion();
            }
        });
        resetButton.style.display = 'none';
        start();
    };

    var start = function() {
        correct = 0;
        questionCount = 0;
        updateTemplate();
    };

    var updateTemplate = function() {
        if (questionCount === 0) {
            resetButton.style.display = 'none';
        } else {
            resetButton.style.display = 'block';
        }
        questionBox.innerHTML = questions[questionCount].question;
        answerBox.value = '';
        answerBox.focus();
    };

    var answerQuestion = function() {
        answer = answerBox.value;

        if (answer.toUpperCase() === questions[questionCount].answer.toUpperCase()) {
            alert('That\'s right!');
            correct += 1;
        } else if (answer === '') {
            return;
        } else {
            alert('That\'s wrong!');
        }

        questionCount += 1;

        if (questionCount < questions.length) {
            updateTemplate();
        } else {
            alert('Quiz completed with ' + correct + ' correct answers!');
            start();
        }
    };
    init();
})();
