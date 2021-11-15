
//new quiz variables:
const startBtn= document.getElementById('start');
const submitBtn = document.getElementById('submit');
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const questAnswerElement = document.getElementById('answers');
const answerButtonsElement = document.getElementById('answer-btn');
const pData = document.getElementById('myText');
const fscore = document.getElementById('fscore');

let currentQuestion = 0;
let score = 0;

const formEl = document.getElementById('q1form');
//var tasksToDoEl = document.querySelector("#tasks-to-do")

nextBtn.classList.add('hide');
formEl.style.display= "none";
startBtn.addEventListener('click',startGame);
nextBtn.addEventListener('click',()=>{currentQuestionIndex++
    setNextQuestion();
});
function startGame()
{
    console.log("Start Game");
    score =0;
    startBtn.classList.add('hide');
    pData.classList.add('hide');
    shuffledQuestions= myQuestions.sort(()=> Math.random()- .5);  //to show questions randomly
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion()
{
     resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function resetState()
{
    clearStatusClass(document.body);
    nextBtn.classList.add('hide');
    while(answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}

function showQuestion(question)
{
    questionElement.innerText = question.question;
    question.answers.forEach(answer =>{
        const button= document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        //answerButtonsElement.innerText = answer.text
        if(answer.correct)
        {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
        //currentQuestionIndex++;
    });

}

function selectAnswer(e)
{
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
   // Array.from(answerButtonsElement.children).forEach(button =>{
        //setStatusClass(button, button.dataset.correct)
   // })
    if(shuffledQuestions.length > currentQuestionIndex+1)
    {
        //nextBtn.classList.remove('hide')
       // setNextQuestion();
       currentQuestionIndex++;
       setNextQuestion();
    }
    else
    {
       /* startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');*/
        //submitBtn.classList.remove('hide');
        //showResults(questions, quizContainer, resultsContainer);
        document.body.innerHTML = "";
        showResults(score);
        //exit();
    }
    //nextBtn.classList.remove('hide');
    console.log("in select answer e"+ currentQuestion);
    //currentQuestionIndex++;
    //setNextQuestion();
}

function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
        ++score;
        console.log(score);
        let p  = document.createElement('p')
        p.appendChild(document.createTextNode("Correct"));

    }
    else{
        element.classList.add('wrong');
        let p  = document.createElement('p')
        p.appendChild(document.createTextNode("Wrong"));
        alert("Wrong")
        
        //--score;
    }
   // setNextQuestion();

}

function clearStatusClass(element)
{
    
        element.classList.remove('correct')
        element.classList.remove('wrong');

}

function showResults(score){//, resultsContainer){
    // code will go here
   // console.clear();
   var x = document.createElement("P");                        // Create a <p> node
   var t = document.createTextNode("All Done !! ");    // Create a text node
   x.appendChild(t);                                           // Append the text to <p>
   document.body.appendChild(x);
    // document.body.innerHTML = "<h3>All Done !!<h3><br> "
     fscore.innerHTML = score;
     var t1 = document.createTextNode("Your score is ")
     //document.body.innerHTML += "" + fscore.innerHTML; 
     x.appendChild(t1);
     //x.appendChild(t1+ fscore.innerHTML);
     var t2 = document.createTextNode(fscore.innerHTML);
     x.appendChild(t2);
    x.setAttribute("id", "myForm");
    document.body.appendChild(x);
    var t3 = document.createTextNode("Enter your initials");
     x.appendChild(t3);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    //y.setAttribute("type", "numeric");
   // y.setAttribute("type","button");
    //y.setAttribute("value", score);
    document.getElementById("myForm").appendChild(y);
    
    const button= document.createElement('button')
    button.innerText = "Submit";
    button.classList.add('btn');
    x.appendChild(button);
    button.addEventListener('click', function(){ var txtName =y.value;
    //var txtOutput = txtName.value;
    x.innerHTML = ""
    var t4 = document.createTextNode(txtName);
    //x.appendChild(t4)
    //x.appendChild(t2)
    var ul = document.createElement("ul");
    //var name = document.getElementById("txtName");
    var li = document.createElement("li");
    //li.setAttribute('txtName','t2');
    //li.appendChild(document.createTextNode(txtName.value, t2));
    li.innerHTML = txtName + "  ";
    li.innerHTML+= fscore.innerHTML;
    ul.appendChild(li);
    x.appendChild(ul);
    startBtn.innerText = 'Go Back';
    startBtn.classList.remove('hide');
    nextBtn.innerText = 'Clear High Score';
    nextBtn.classList.remove('hide');
    x.appendChild(startBtn);
    x.appendChild(nextBtn)
    })
    
    
 

       
    // gather answer containers from our quiz
    
    
}
//}
//formEl.addEventListener("submit", createTaskHandler);



/*
//call quiz questions:
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//showQuestions(questions, quizContainer);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
        // we'll need a place to store the output and the answer choices
	   var output = [];
	   var answers;

	// for each question...
	  for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	    // finally combine our output list into one string of html and put it on the page
	    quizContainer.innerHTML = output.join('');
}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
        
	    // gather answer containers from our quiz
	    var answerContainers = quizContainer.querySelectorAll('.answers');
	
	    // keep track of user's answers
	    var userAnswer = '';
	    var numCorrect = 0;
	
	    // for each question...
	    for(var i=0; i<questions.length; i++){

		    // find selected answer
		    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		    // if answer is correct
		    if(userAnswer===questions[i].correctAnswer){
			    // add to the number of correct answers
			    numCorrect++;
			
			    // color the answers green
			    answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}*/


//new variables:



var myQuestions = [
	{
		question: "Which type of JavaScript language is ___",

		answers: [
			
           { text: 'Object-Oriented',correct: false},
           { text: 'Object-Based' , correct : true},
           {text:  'Assembly-language',correct: false},
           {text: 'High-level' , correct: false}
        
        ]//,
		//correctAnswer: 'b'
	},
	{
		question: "Which of the following is the correct output for the following JavaScript code: varx=5,y=1;  var obj ={ x:10}, with(obj){ alert(y) }",
		
        answers: [
			{text: '1', correct: true} ,
            {text: '10', correct: false} ,
            {text: 'Nan', correct: false} ,
            {text: 'Error', correct: false}
			
        ]//,
		//correctAnswer: 'a'
	},
    {
		question: "Which one of the following also known as Conditional Expression:",

		answers: [

            {text: 'Alternative to If-Else1', correct: false} ,
            {text: 'Switch Statement', correct: false} ,
            {text: 'If-Else statement', correct: true} ,
            {text: 'immediate -if', correct: false}
        ]//,
		//correctAnswer: 'c'
	},
    {
		question: "Among the following given JavaScript snipped codes, which is more efficient: Code 1: for(var number=10;number>=1;number--){document.writeln(number);}                                                                                                     Code 2 :var number=10;  while(number>=1){ document.writeln(number);  number++;}",

		answers: [

            {text: 'Code 1', correct: true} ,
            {text: 'Code 2', correct: false} ,
            {text: 'Both', correct: false} ,
            {text: 'None of the above', correct: false}        
        ]//,
		//correctAnswer: 'a'
	},
    {
		question: "What is the difference between == and ===",

		answers: [
            {text: 'no difference ', correct: false} ,
            {text: 'very much different', correct: false} ,
            {text: '=== compare data type and value where as == compare only value', correct: true} ,
            {text: '=== does not compare any thing, == compares two values', correct: false}  
        
        ]//,
		//correctAnswer: 'c'
	}

];


//click events:
/*restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);


function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.add("hide");
 }
  
 beginQuiz();

 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }


 function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.remove("hide");
 }

 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    nextBtn.classList.remove("hide");
 }
 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }*/