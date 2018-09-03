//Question Variables

let question0 = {
    question: "What company's slogan should be: Connect with people for no reason at all",
    answer: "LinkedIn",
    choices: ["Twitter", "LinkedIn", "Snapchat", "Tinder"],
    correctAnswer: "1",
    correctImage: "assets/images/image0.png"
};

let question1 = {
    question: "What restaurant's slogan should be: It's 2am and you're drunk",
    answer: "Waffle House",
    choices: ["Hopdoddy", "Home Slice", "Waffle House", "Chick-fil-a"],
    correctAnswer: "2",
    correctImage: "assets/images/image1.jpg"
};

let question2 = {
    question: "What product's slogan should be: Every bite is a different temperature",
    answer: "Hot Pockets",
    choices: ["Hot Pockets", "Wheat Thins", "Go-Gurt", "Gusters"],
    correctAnswer: "0",
    correctImage: "assets/images/image2.jpg"
};

let question3 = {
    question: "What product's slogan should be: Slip into a nice coma for a few hours",
    answer: "NyQuil",
    choices: ["Rogaine", "Axe", "NyQuil", "Preparation H"],
    correctAnswer: "2",
    correctImage: "assets/images/image3.jpg"
};

let question4 = {
    question: "What product's slogan should be: You have exactly one minute to enjoy this cereal",
    answer: "Rice Krispies",
    choices: ["Grape Nuts", "Lucky Charms", "Raisin Bran", "Rice Krispies"],
    correctAnswer: "3",
    correctImage: "assets/images/image4.jpg"
};

let question5 = {
    question: "What product's slogan should be: How many days straight can I eat this before dying",
    answer: "Ramen Noodles",
    choices: ["Ramen Noodles", "Spaghetti O's", "Kraft Mac & Cheese", "Slim Jims"],
    correctAnswer: "0",
    correctImage: "assets/images/image5.jpg"
};

let question6 = {
    question: "What company's slogan should be: We have a salad bar for some reason",
    answer: "Pizza Hit",
    choices: ["Jason's Deli", "Subway", "Taco Bell", "Pizza Hut"],
    correctAnswer: "3",
    correctImage: "assets/images/image6.jpg"
};

let question7 = {
    question: "What product's slogan should be: Be careful not to poke a hole through the back",
    answer: "Capri Sun",
    choices: ["Trojan", "Nike", "Capri Sun", "Life Saver"],
    correctAnswer: "2",
    correctImage: "assets/images/image7.jpg"
};

let question8 = {
    question: "What company's slogan should be: Pay money to look homeless",
    answer: "Urban Outfitters",
    choices: ["Urban Outfitters", "Levi's", "Kate Spade", "Yeti"],
    correctAnswer: "0",
    correctImage: "assets/images/image8.png"
};

let question9 = {
    question: "What product's slogan should be: They are all the same flavor",
    answer: "Fruit Loops",
    choices: ["Skittles", "Jelly Belly", "Fruit Loops", "Sour Patch Kids"],
    correctAnswer: "2",
    correctImage: "assets/images/image9.jpg"
};

let question10 = {
    question: "What company's slogan should be: We'll leave the light on for you because you're in a sketchy neighborhood",
    Answer: "Motel 6",
    choices: ["Hilton", "Motel 6", "Holiday Inn", "Airbnb"],
    correctAnswer: "1",
    correctImage: "assets/images/image10.jpg"
};

let question11 = {
    question: "What product's slogan should be: All the vegetables you'll ever need if you could stop mixing it with vodka",
    answer: "V8",
    choices: ["Sprite", "Cranberry Juice", "V8", "Orange Juice"],
    correctAnswer: "2",
    correctImage: "assets/images/image11.jpg"
};

let questionsArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11];

let index = 0;

let gameScores = {
    answeredCorrect: 0,
    answeredWrong: 0,
};

function reset() {
    index = 0;
    gameScores.answeredCorrect = 0;
    gameScores.answeredWrong = 0;
    $("#score").html(" ");
    $("#reset").hide();
}

//Display Question
function displayQuestion(){
    $("#question").html(questionsArray[index].question);
    $("#button0").text(questionsArray[index].choices[0]);
    $("#button1").text(questionsArray[index].choices[1]);
    $("#button2").text(questionsArray[index].choices[2]);
    $("#button3").text(questionsArray[index].choices[3]);
}

//Start Game
$(document).ready(function(){

//When start button pressed
    $("#timerDisplay").hide();
    $(".btn").hide();
    $("#reset").hide();
    $("#startme").on("click", function(){
        displayQuestion();
        $(".btn").show();
        $("#startme").hide();
    })
})

//When question is answered
$(".btn").click(function(){
    if (index < questionsArray.length) {
        let buttonValue = ($(this).attr("data-value"));
        console.log(buttonValue);
        if (buttonValue === questionsArray[index].correctAnswer) {
            $("#quizMessage").html("Correct! <img src='" + questionsArray[index].correctImage + "' height = 200 width = 350 alt='correct'>");
            gameScores.answeredCorrect ++;
        }
        else {
            $("#quizMessage").html("Wrong! The correct answer was: <br><br> <img src='" + questionsArray[index].correctImage + "' height = 200 width = 350 alt='correct'><br>" + questionsArray[index].answer);
            gameScores.answeredWrong ++;
        }
    $("#quizMessage").show();
    $(".btn").hide();
    $("#question").hide();

    setTimeout(nextQuestion, 3000);
}

//Go to next question
function nextQuestion() {
    index ++;
    if (index < questionsArray.length) {
        displayQuestion();
        $("#question").show();
        $("#quizMessage").hide();
        $(".btn").show();
    }
    else {
        $("#quizMessage").hide();
        $("#question").hide();
        $("#score").html("<div>"+ "Game Over! <br> Your Score" +"</div>"+
		"<div>"+ "Correct Guesses: " + gameScores.answeredCorrect +"</div>" + 
		"<div>"+ "Wrong Guesses: " + gameScores.answeredWrong +"</div>");
    }
}
})

