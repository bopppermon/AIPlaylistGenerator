const questions = [
	{
		question: "What is your favorite genre?",
		answers: [
			{text: "Country", val: 0},
			{text: "Pop", val: 1},
			{text: "Rap", val: 2},
			{text: "Classical", val: 3}
		]
	},
	{
		question: "What type of beats do you like? ",
		answers: [
			{text: "Fast", val: 0},
			{text: "Slow", val: 1},
			{text: "Medium", val: 2},
			{text: "No Preference", val: 3}
		]
	},
	{
		question: "Where do you like to listen to music?",
		answers: [
			{text: "While doing chores.", val: 0},
			{text: "While studying.", val: 1},
			{text: "In the car.", val: 2},
			{text: "While working out.", val: 3}
		]
	},
	{
		question: "How often do you listen to music",
		answers: [
			{text: "Never", val: 0},
			{text: "Sometimes", val: 1},
			{text: "Often", val: 2},
			{text: "Very Often", val: 3}
		]
	}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("answer-btn");

let currentQuestionIndex = 0;
let score = [];

function startQuiz(){
	currentQuestionindex = 0;
	score = [];
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1; 
	questionElement.innerHTML =  questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		button.addEventListener("click", selectAnswer);
	});
}

function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
} 

function selectAnswer(e){ //THIS NEEDS TO BE UPDATED TO MATCH WHAT WE WANT, TEMP SOLUTION
	const selectedButton = e.target;
	selectedButton.classList.add("correct");
	nextButton.style.display = "block";
	score.push(1); 
}

function showScore(){
	resetState();
	questionElement.innerHTML = 'Thank you for completing our quiz!!';
	nextButton.innerHTML = 'View Results';
	nextButton.style.display = "block";
}

function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=> {
	if(currentQuestionIndex < questions.length){
		handleNextButton();
	}else{
		startQuiz();
	}
});


startQuiz();