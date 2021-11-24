
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
var ul = document.createElement("ul");// for displaying result
var li = document.createElement("li"); // for displaying result
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
var countDownDate = new Date().getTime();  //variable for timer getting time 
var diff =0; // for timer counting time diffetence 
var finalValue;
timer.classList.remove('hide');  //showing timer again to the HTML
var highScore = document.getElementById('highScore'); // to get high score
highScore.style.display = 'flex'
highScore.addEventListener('click',getHighScore) //Adding event listener to get high score 

function getHighScore()
{
    for (let i = 0; i <= li.length; i++) 
        {
      
            ul.li.classList.remove('hide');
            if(localStorage.getItem('li')){
                console.log(li.value);
                li.value(localStorage.getItem('li.value')) ;
                ul.appendChild(li);
                x.appendChild(ul)
            }
            
         }
}

//Timer function to update time on user screen, max time limit is 2.5 minutes , that is 2 minutes 30 seconds 
function updateTimer()
 {
   
    now = new Date();
    diff = countDownDate - now;
    var seconds = Math.floor((diff % (120000 * 60)) / 1000);
    finalValue = countDownDate + now;
    document.getElementById("timer").innerHTML =  '<div>' + "Time Left"+ seconds + '<span>Seconds</span></div>';
    if(finalValue == 120000)
    document.getElementById("timer").innerHTML =  '<div>' + "Time up! Game over !!"+ seconds + '<span>Seconds</span></div>';
}


//Calling start function when start button is clicked 
function startGame()
{
    console.log("Start Game");
    setInterval('updateTimer()', 1000);
    timer.classList.remove('hide');
    countDownDate = new Date().getTime();
    diff = 0;
    formEl.style.display= "none";
    ul.classList.add('hide');
    for (let i = 0; i <= li.length - 1; i++) {
      
        li.classList.add('hide');
    }

    
    
    score =0;
    startBtn.classList.add('hide');
    pData.classList.add('hide');
    //setInterval();
   // setInterval('updateTimer()', 1000);
    shuffledQuestions= myQuestions.sort(()=> Math.random()- .5);  //to show questions randomly
    
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();

}

//Function for setting  next question 
function setNextQuestion()
{
     resetState();
     setInterval('updateTimer()', 1000);

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
    setInterval('updateTimer()', 1000);

    questionElement.innerText = question.question;
    question.answers.forEach(answer =>{
        const button= document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct)
        {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    });

}

//Takes event from one of the seslected answer button
function selectAnswer(e)
{
    setInterval('updateTimer()', 1000);

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    if(shuffledQuestions.length > currentQuestionIndex+1)
    {
       currentQuestionIndex++;
       setNextQuestion();
    }
    else
    {
        clearStatusClass(document.body);
        questionContainer.classList.add('hide');
        showResults(score);
    }
    
    console.log("in select answer e"+ currentQuestion);
}

function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
        ++score;
        console.log(score);
        //let p  = document.createElement('p')
       //p.appendChild(document.createTextNode("Correct"));
       // document.getElementById("answer").innerHTML =   "Correct";

    }
    else{
        element.classList.add('wrong');
       //let p  = document.createElement('p')
      //  p.appendChild(document.createTextNode("Wrong"));
        alert("Wrong")
      // document.getElementById("answer").innerHTML =   "Wrong";

        
        //--score;
    }
   // setNextQuestion();

}

function clearStatusClass(element)
{
    
        element.classList.remove('correct')
        element.classList.remove('wrong');

}


//Creating elements to show result before submitting user name and score 
var x = document.createElement("div");              // Create a <div> node
var t = document.createTextNode("All Done !! ");    // Create a text node
//t.style.marginTop = "200px"
var t1 = document.createTextNode("Your score is ")
//t1.style.marginTop = "300px"
//var t4 = document.createElement("<br>")
var t3 = document.createTextNode("Enter your initials");
//t3.style.marginTop = "400px"

function showResults(score){
    // code will go here
        setInterval(0);
        timer.classList.add('hide');
        x.appendChild(t);
        x.style.alignContent = "center";                               // Append the text to <p>
        document.body.appendChild(x);
        fscore.innerHTML = score;
        x.appendChild(t1);
        var t2 = document.createTextNode(fscore.innerHTML);
        x.appendChild(t2);
        x.setAttribute("id", "myForm");
        document.body.appendChild(x);
    
        x.appendChild(t3);
        x.marginRight = "1000px";
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        document.getElementById("myForm").appendChild(y);
        y.style.display = "flex"
        y.style.marginRight = "1000px";
        y.style.marginTop = "200px"
        
        //x.appendChild(t4);
        const button= document.createElement('button')
        button.innerText = "Submit";
        button.classList.add('btn');
        button.style.alignItems= "center";
        x.appendChild(button);
        button.addEventListener('click', function(){ var txtName =y.value;
        //var txtOutput = txtName.value;
        x.innerHTML = ""
        var t4 = document.createTextNode(txtName);
        //t4.style.alignItems= "center";
        ul.classList.remove('hide');
        for (let i = 0; i <= li.length; i++) 
        {
      
            ul.li.classList.remove('hide');
            if(localStorage.getItem('li')){
                console.log(li.value);
                li.value(localStorage.getItem('li.value')) ;
                ul.appendChild(li);
                x.appendChild(ul)
            }
            
         }
         li = document.createElement("li"); // for displaying result
               li.innerHTML  = txtName + "  ";
               li.innerHTML+= fscore.innerHTML;
               let val = li.value;
               localStorage.setItem("li", JSON.stringify(val));
               ul.appendChild(li);
               x.appendChild(ul);
    highScore.style.display = "block";
    highScore.style.marginRight = "50px";   
    highScore.style.marginBottom = "300px";  
    startBtn.innerText = 'Go Back';
    startBtn.style.marginRight = "500px";
    startBtn.style.alignItems= "center";
    startBtn.classList.remove('hide');
    nextBtn.innerText = 'Clear High Score';
    nextBtn.style.marginRight= "400px";
    startBtn.style.alignItems= "center";
    nextBtn.classList.remove('hide');
    x.appendChild(startBtn);
    x.appendChild(nextBtn)
    y.classList.add('hide');
    })  
    
}
//new variables for Quiz answers



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

