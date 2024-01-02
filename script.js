const questions = [
    {
        question: "Commonly used data type do not include ____________.",
        answers: [
            { text: "String's", correct: false },
            { text: "Number's", correct:false },
            { text: "Booleans", correct: true },
            { text: "Alerts", correct: false},
        ]
    },

    {
        question: "The condition in an if/ else statment enclosed with ____________.",
        answers: [
            { text: "Qutes", correct:  false },
            { text: "Crully brackts", correct:  false },
            { text: "Parenthesis", correct: true },
            { text: "Squar brackts", correct:  false},
        ]
    },

    {
        question: "Arrays in JavaScript can be store____________.",
        answers: [
            { text: "Numbers and strings", correct:  false },
            { text: "Other string", correct:  false},
            { text: "Booleans", correct: false},
            { text: "All of the above", correct: true },
        ]
    },

    {
        question: "String values must be enclosed within ____________  when being assigned to variable.",
        answers: [
            { text: "Coma", correct:true },
            { text: "Crully brackts", correct:  false },
            { text: "Parenthesis", correct:  false },
            { text: "Qoutes", correct:  false},
        ]
    },

    {
        question: "Very useful tool use during development and debugging for printing content to the debugger is ____________ .",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "Forloops", correct:  false },
            { text: "Terminal/bash", correct:  false },
            { text: "console.log", correct: false},
        ]
    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = " none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz();