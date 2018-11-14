
$('#start').on('click', function(){
	$('#start').remove();
	game.loadQuestion();
})

$(document).on('click', '.answer-button', function(e){
	game.clicked(e);

})

var questions = [{

	question: "Who said: Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.",
	options:["Rick","Morty","Summer","Jerry"],
	correct:"Morty",
	image:"assets/images/mortyNobody.jpeg"
	}, {
	question:"Who said: Weddings are basically funerals with cake.",
	options:["Rick","Morty","Summer","Jerry"],
	correct:"Rick",
	image:"assets/images/rickWeddings.jpeg"
	}, {
	question: "What word is like the N word and the C word had a baby and it was raised by all the bad words for Jews.",
	options:["Plumbus","Dinglebop","Fleeb","Glip Glop"],
	correct:"Glip Glop",
	image:"assets/images/GlipGlop.jpeg"
	}, {
	question: "Who said: He's not a hot girl. He can't just bail on his life and set up shop in someone else's.",
	options:["Rick","Beth","Summer","Jerry"],
	correct:"Beth",
	image:"assets/images/beth.jpeg"
	}, {
	question: "Who's catch phrase is: Wubba lubba dub dub!",
	options:["Rick","Morty","Summer","Jerry"],
	correct:"Rick",
	image:"assets/images/WubbaLubba.GIF"
	}, {
	question: "What is Snowball's slave name?",
	options:["Butters","Snuffles","Snowflake","Bruce"],
	correct:"Snuffles",
	image:"assets/images/snuffles.jpeg"
	}, {
	question: "In one of the parallel universes,the chairs who sit on people order... ",
	options:["phones","shoes","tables","money"],
	correct:"phones",
	image:"assets/images/Furniture.png"
	}, {
	question: "The Vampire Gym Teacher name is",
	options:["Coach Feratu","Coach Johnson","Coach Dracula","Coach Alucard"],
	correct:"Coach Feratu",
	image:"assets/images/coachFeratu.jpeg"
	}, {
	question: "What causes a timeline split?",
	options:["doubt","uncertainty","confusion","rage"],
	correct:"uncertainty",
	image:"assets/images/uncertain.PNG"
	}, {
	question: "What is the Smith family's cereal of choice ",
	options:["Strawberry Smiggles","Banana O's","Choco-coco","Fruity Wiggins"],
	correct:"Morty",
	image:"assets/images/strawberrySmiggles.jpeg"
}];

var game = {
	questions:questions,
	currentQuestion:0,
	counter:20,
	correct:0,
	incorrect:0,
	countDown: function(){

		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter <= 0){
			console.log("Time is UPPPPPPP");
			game.timeUp();
		}

	},
	loadQuestion: function(){
		timer = setInterval(game.countDown, 1000);
		$('#subwrapper').html ('<h2>'+ questions[game.currentQuestion].question +'</h2>');

		   for (var i = 0; i < questions[game.currentQuestion].options.length; i++) {
         var button = $('<button>');
         button.addClass('answer-button');
         button.attr('id', 'button-'+i);
         button.data('name', questions[game.currentQuestion].options[i]);
         button.text(questions[game.currentQuestion].options[i]);
           $('#subwrapper').append(button);
        }



		// for (var i = 0; i < questions[game.currentQuestion].options.length; i++) {
		// 	$('#subwrapper').append('<button class="answer-button" id="button-'+i+'"data-name"'+
		// 		questions[game.currentQuestion].options[i]+'">'+questions[game.currentQuestion].options[i]+'</button>');
		// }
	},
	nextQuestion: function(){
		game.counter = 20;
		$('#counter').html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();


	},
	timeUp: function(){
		clearInterval(timer);
		$('#subwrapper').html('<h2>Out of time</h2>');
		$('#subwrapper').append('<h2>The right answer was: '+questions[game.currentQuestion].correct+ '</h2>');
		if (game.currentQuestion == questions.length-1) {
			setTimeout(game.results, 3*1000);
		} else {
			setTimeout(game.nextQuestion, 3*1000);
		}

	},
	results: function(){

	},
	clicked: function(e){
		clearInterval(timer);
			console.log($(e.target).data("name"));
			console.log(questions[game.currentQuestion].correct);
		if ($(e.target).data("name") === questions[game.currentQuestion].correct) {
			game.correctAnswer();

		} else {
			game.wrongAnswer();
			console.log("nope");
		}

	},
	correctAnswer: function(){
		console.log("You got it right!")
		clearInterval(timer);
		game.correct++;
		$("subwrapper").html('<h2>That is correct!</h2>');
		if (game.currentQuestion == questions.length -1) {
			 setTimeout(game.results, 3 * 1000);
		} else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},
	wrongAnswer: function(){
		console.log("Nahhhhh");
		clearInterval(timer);
		game.incorrect++;
		$("subwrapper").html('<h2>That is wrong!</h2>');
		$('#subwrapper').append('<h2>The right answer was: '+questions[game.currentQuestion].correct+ '</h2>');
		if (game.currentQuestion == questions.length -1) {
			 setTimeout(game.results, 3 * 1000);
		} else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},
	reset: function(){

	}



}
