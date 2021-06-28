//homepage is here
// user clicks button, nothing will happen if it doesn't start
// after clicking, the timer starts and the first question comes up
// if the user clicks the wrong option, the time lowers by 10 seconds, and shows WRONG underneath, and moves to the next question
// if the user clicks the correct answer, "correct" shows up and moves on to the next
// when user reaches the end, a new section comes up.
// the final score is the time remaining
// user must input their initials and click submit
// when the user clicks submit, it takes them to a highscores screen
// user can click "go back" or "clear highscores"
// if user clicks "go back" it takes them to the homepage 
// if user clicks  "clear highscores" it will clear their score

// variables for the procedure
var codingQuizBox = document.querySelector(".codingQuizBox");
var startButton = document.querySelector("#startButton");
var questionButton = document.querySelector(".questionButton");
var question1 = document.querySelector(".question1");
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");
var question4 = document.querySelector(".question4");
var question5 = document.querySelector(".question5");
var questionTitle = document.querySelector(".questionTitle");
var countdown = document.querySelector(".countdown");

var questionData = [
{
    question: "What symbol goes before the class selector in CSS?", 
    choices: ["!", "$", ".", "#" ],
    solution: 2
},
{
    question: "What is needed to finish the li element?", 
    choices: ["</.li>", "</li>", "<li>", "<#li>" ],
    solution: 1
},
{
    question: "What is needed when linking a style sheet to your html?", 
    choices: ["ref=", "link=", ".href=", "href=" ],
    solution: 3
},
{
    question: "What is Dimitri(your instructor)'s last name?", 
    choices: ["Bradley", "Bilinkin", "Bilenkin", "Bradford" ],
    solution: 2
},
{
    question: "What does CSS stand for?", 
    choices: ["Cascading Styles Sheet", "Cascading Stat Sheets", "Cascading Style Sheet", "Cascading Styles Sheets" ],
    solution: 2
}
]
var index = 0
var timer = questionData.length * 15
var clockid 

// click event calls the function that we will use to start the game
startButton.addEventListener("click", startquiz) 
function startquiz (){
    // alert("test")
     codingQuizBox.classList.add("hide")
     question1.classList.remove("hide")
     clockid = setInterval(showtime,1000)
}
// click events that cause the cycling of questions
questionButton.addEventListener("click", nextQuestion2)
function nextQuestion2 () {
    question1.classList.add("hide")
    question2.classList.remove("hide")
}

questionButton.addEventListener("click", nextQuestion3)
function nextQuestion3 () {
    question3.classList.remove("hide")
}







// function startquiz (){
//    alert("test")
//     codingQuizBox.classList.add("hide")
//     question2.classList.remove("hide")
//     showquestion() 
//     clockid = setInterval(showtime,1000)
// }

 
 
 
// This pulls the element from the html, like literally brings it from there and shows the questions. This must be done for each question, and also for each static section
// function showquestion (){
    // question2.innerHTML= `
    // <h1 class="questionTitle">${questionData[index].question}</h1>
    // <button class="questionButton">${questionData[index].choices[0]}</button>
    // <button class="questionButton">${questionData[index].choices[1]}</button>
    // <button class="questionButton">${questionData[index].choices[2]}</button>
    // <button class="questionButton">${questionData[index].choices[3]}</button>
    // `












function showtime () {

   countdown.textContent=timer 
   timer=timer - 1

}