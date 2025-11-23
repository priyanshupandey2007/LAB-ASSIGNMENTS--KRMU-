
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which language is used for web page structure (HTML, CSS, or JS)?",
        answer: "html"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What keyword is used to declare a constant variable in JavaScript?",
        answer: "const"
    }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        
        let currentQuestion = quizQuestions[i];

        
        let userAnswer = prompt(currentQuestion.question);

        
        if (userAnswer === null) {
            userAnswer = "";
        }

        
        let processedInput = userAnswer.toLowerCase().trim();

        
        if (processedInput === currentQuestion.answer) {
            
            score++; 
            alert("Correct! Great job.");
        } else {
            
            alert("Wrong! The correct answer was: " + currentQuestion.answer);
        }
    }

    let finalMessage = "Quiz Over!\n" + 
                       "Your final score is: " + score + " out of " + quizQuestions.length;
    
    alert(finalMessage);
    console.log(finalMessage); 
}

runQuiz();