
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
const ul = document.createElement("ul");// for displaying result
const li = document.createElement("li"); // for displaying result
li.className = "resultList";
const  containerEl = document.getElementById('container');

let currentQuestion = 0;
let score = 0;

const formEl = document.getElementById('q1form');

nextBtn.classList.add('hide');
formEl.style.display= "none";
startBtn.addEventListener('click',startGame);
/*nextBtn.addEventListener('click',()=>{currentQuestionIndex++
    setNextQuestion();
});*/

function startGame()
{
    console.log("Start Game");
    //nextBtn.classList.remove('hide');
    //formEl.reset();
    formEl.style.display= "none";
    ul.classList.add('hide');
    for (let i = 0; i <= li.length - 1; i++) {
      
        li.classList.add('hide');
    }
    
    score =0;
    //formEl.reset();
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
       currentQuestionIndex++;
       setNextQuestion();
    }
    else
    {
       /* startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');*/
        //submitBtn.classList.remove('hide');
        //showResults(questions, quizContainer, resultsContainer);
        //document.body.innerHTML = "";
        clearStatusClass(document.body);
        questionContainer.classList.add('hide');
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

var x = document.createElement("div");              // Create a <div> node
var t = document.createTextNode("All Done !! ");    // Create a text node
var t1 = document.createTextNode("Your score is ")
var t3 = document.createTextNode("Enter your initials");

function showResults(score){
    // code will go here
  
        x.appendChild(t);                                           // Append the text to <p>
        document.body.appendChild(x);
        fscore.innerHTML = score;
        x.appendChild(t1);
        var t2 = document.createTextNode(fscore.innerHTML);
        x.appendChild(t2);
        x.setAttribute("id", "myForm");
        document.body.appendChild(x);
    
     x.appendChild(t3);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    document.getElementById("myForm").appendChild(y);
    
    const button= document.createElement('button')
    button.innerText = "Submit";
    button.classList.add('btn');
    x.appendChild(button);
    button.addEventListener('click', function(){ var txtName =y.value;
    //var txtOutput = txtName.value;
    x.innerHTML = ""
    var t4 = document.createTextNode(txtName);
    ul.classList.remove('hide');
    for (let i = 0; i <= li.length - 1; i++) {
      
        ul.li.classList.remove('hide');
    }
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
    y.classList.add('hide');
    })  
    
}
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
