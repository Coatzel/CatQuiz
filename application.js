$(document).ready(function() 

{	




	//quiz questions
var questions = [ {
question: "Why did the Ancient Egyptians revere Cats so highly?",
choices: ["The great Tutankhamen decreed 'make it so'", 
"Cats were prized for their ninja ability to destroy vermin",
"The ability to host parties with style and grace",
"The Sweet purrs of the feline echoed the will of the gods"],
qNum : 0,
correct : 1,
fact: "Cat Fact: Cats were domesticated 10,000 years ago for hunting skills"
},
{
question: "Question 2: Why do cats always land on thier feet?",
choices:["An internal gyroscope called 'aerial righting reflex'",
"because Cats have an unusually flexible backbone and no functional clavicle",
"Both of the Above", 
"False. Only Humans land on thier feet."],
qNum: 1,
correct: [2],
fact: "Cat Fact: The cat righting reflex is a cat's innate ability to orient itself as it falls in order to land on its feet. The righting reflex begins to appear at 3–4 weeks of age, and is perfected at 6–7 weeks.[1] Cats are able to do this because they have an unusually flexible backbone "
// next
},
{
question: "Question 3: What does the Cat say?",
choices:["Woof", 
"Good Evening",
 "The decor is quite Cat o strophic",
  "Meow"],
qNum: 2,
correct: [3],
fact: "Isaac Newton invented the cat flap after his own cat, Spithead, kept opening the door and spoiling his light experiments."
},
{
question: "A human has only 6 muscles in the outer ear. How many does a cat have?",
choices: [
"4",
"6",
"32",
"53"],

qNum: 3,
correct: [2],
fact:" Cat Fact: A cat can independently rotate its ears 180 degrees"
},
{
question: "Who was the first cartoon cat?",
choices:[
"Heathcliff",
"Puss n Boots",
"Felix",
"Tom(of Tom and Jerry)"
],
qNum:4,
correct: [2],
fact: "Thanks for testing your Cat Facts Knowledge! Come back reel soon!"
}]





// Global variables
var numberCorrect = 0;
var currentQuestion = 0;
//skips Question 1 repeat



//


// cycle through questions
$("#button-holder").on("click", "#submit", function() {

    
	
	console.log($('input[name = "option"]:checked').val());
	score();
	currentQuestion++;
	nextQuestion();

	
	// $("#facts").html(numberCorrect);
	$("#facts").html(questions[currentQuestion-1].fact);
	
	// somewhat closer?
	//console.log($(questions[currentQuestion].correct));
	

	
});

//update question classes
function nextQuestion(){
	if (currentQuestion < 5) 
	{
	var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer-store"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div>';
   // PRINTS NEXT QUESTION
	$("#question-wrapper").html(newQuestion);
	}
	
	//further format
	if (currentQuestion == 5) 

	var finalScore = '<span id="final">Congratulations on finishing cat facts!  You correctly answered '+numberCorrect+' questions.'
    $("#question-wrapper").html(finalScore);


		
	
}



function score() {
	if (currentQuestion < 5)
	

	var answer = $('input[name = "option"]:checked').val();
	
	//console.log($('input[name = "option"]:checked').val());
    
    //last wont work
	if (answer == questions[currentQuestion].correct)
	numberCorrect++

		
	

	
	
}
	


});




