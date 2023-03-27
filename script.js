const trivia = [
  {
    question: "Which of the following is a server side language?",
    answer: "PHP",
    choices: ["PHP", "Java Script", "HTML"]
  },
  {
    question: "Which is not a js framework?",
    answer: "Java",
    choices: ["Vue", "Next", "Java"]
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    choices: [" Cascading Screen Style", "Cascading Script Style", "Cascading Style Sheets"]
  },
  {
    question: "What is a responsive website?",
    answer: "A website that responds to user input",
    choices: ["A website that responds to user input", "A website that loads quickly", "A website in the browser"]
  },
  {
    question: "Which is not a browser?",
    answer: "Mount Everest",
    choices: ["Chrome", "File Explorer", "Firefox"]
  }
];

// Define variables for the game
let questionIndex = 0;
let score = 0;
let time = 50;

// Define variables for the HTML elements
const questionElement = document.getElementById("question");
const choice1Element = document.getElementById("choice1-label");
const choice2Element = document.getElementById("choice2-label");
const choice3Element = document.getElementById("choice3-label");
const submitButton = document.getElementById("submit-btn");
const secondsElement = document.getElementById("seconds");

// Function to display the current question
function displayQuestion() {
  // Get the current question object
  const currentQuestion = trivia[questionIndex];

  // Update the HTML elements with the current question and choices
  questionElement.innerText = currentQuestion.question;
  choice1Element.innerText = currentQuestion.choices[0];
  choice2Element.innerText = currentQuestion.choices[1];
  choice3Element.innerText = currentQuestion.choices[2];
}

// Function to check the user's answer
function checkAnswer() {
  // Get the user's selected choice
  const selectedChoice = document.querySelector('input[name="choice"]:checked').value;

  // Get the current question object
  const currentQuestion = trivia[questionIndex];

  // Check if the selected choice is correct
  if (currentQuestion.choices[selectedChoice] === currentQuestion.answer) {
    score++;
  }

  // next question or end the game
  if (questionIndex === trivia.length - 1) {
    endGame();
  } else {
    questionIndex++;
    displayQuestion();
  }
}

// Function for end the game and display the final score
function endGame() {
  clearInterval(timerInterval);
  questionElement.innerText = `Congratulations! Your final score is ${score}/${trivia.length}.`;
  choice1Element.style.display = "none";
  choice2Element.style.display = "none";
  choice3Element.style.display = "none";
  submitButton.style.display = "none";
}

// Function to update the timer
function updateTimer() {
  time--;
  secondsElement.innerText = time;

  if (time === 0) {
    checkAnswer();
    time = 50;
  }
}

// Display the first question
displayQuestion();

// Start the timer
const timerInterval = setInterval(updateTimer, 1000);

// Add event listener to the submit button
submitButton.addEventListener("click", checkAnswer);