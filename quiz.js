// JavaScript code to make the quiz interactive
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Compare the user's answer with the correct answer and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

