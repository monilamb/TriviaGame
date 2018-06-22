var questionsarr = [{
    q: "What was the first full length CGI movie?",
    a1: { correct: false, text: "A Bug's Life" },
    a2: { correct: false, text: "Monsters Inc." },
    a3: { correct: true, text: "Toy Story" },
    a4: { correct: false, text: "The Lion King" },
    picture: "./assets/images/woody.gif",
}, {
    q: "Whis of these is NOT a name of one of the Spice Girls",
    a1: { correct: false, text: "Sporty Spice" },
    a2: { correct: true, text: "Fred Spice" },
    a3: { correct: false, text: "Scary Spice" },
    a4: { correct: false, text: "Posh Spice" },
    picture: "./assets/images/spicegirls.gif",
}];

var index = 0;
var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var playing = false;

function getrightanswer(j) {
    var option;

    if (questionsarr[j].a1.correct == true) {
        return questionsarr[j].a1.text;
    }
    else if (questionsarr[j].a2.correct == true) {
        return questionsarr[j].a2.text;
    }
    else if (questionsarr[j].a3.correct == true) {
        return questionsarr[j].a3.text;
    }
    else if (questionsarr[j].a4.correct == true) {
        return questionsarr[j].a4.text;
    }

}

function countdown() {
    
    intervalId = setInterval(count, 1000);
}

function count() {
    
    time--;

    if (time > 0 && index != questionsarr.length) {
        $("#gamespace").html("");
        $("#time").html("Time Remaining: " + time + "S");
        $("#question").html("<br>" + questionsarr[index].q + "<br>");
        $("#option1").html(questionsarr[index].a1.text + "<br>");
        $("#option2").html(questionsarr[index].a2.text+"<br>");
        $("#option3").html(questionsarr[index].a3.text+"<br>");
        $("#option4").html(questionsarr[index].a4.text+"<br>");

    }
    else if (time == 0 && index != questionsarr.length) {
        var rightanswer = getrightanswer(index);
        clearInterval(intervalId);
        unanswered++;
        $("#gamespace").html("");
        $("#time").html("Time Remaining: 0 S");
        $("#question").empty();
        $("#option1").html("<br>Out of Time!<br>");
        $("#option2").html("The correct answer was: " + rightanswer);
        $("#option3").html("");
        $("#option4").html("");
        time = 30;
        index++; 
        setTimeout(countdown, 2000);

    }
    else if (index == questionsarr.length) {
        playing = false;
        clearInterval(intervalId);
        $("#gamespace").text("All done, here's how you did!");
        $("#question").empty();
        $("#time").empty();
        $("#option1").text("Correct Answers: " + correct);
        $("#option2").text("Incorrect Answers: " + incorrect);
        $("#option3").text("Unanswered: " + unanswered);
        $("#startover").text("Start Over?");

    }
   
}

$("#option1").on("click", function () {
    if(index != questionsarr.length) {
        if (questionsarr[index].a1.correct == true) {
            clearInterval(intervalId);
            $("#gamespace").html("");
                $("#question").html("Time Remaining: " + time + "S");
                $("#option1").text("Correct!");
                $("#option2").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                $("#option3").html("");
                $("#option4").html("");
            correct++;
            index++; 
            setTimeout(countdown, 2000);
        }
        else {
            clearInterval(intervalId);
            var rightanswer = getrightanswer(index);
            incorrect++;
            $("#gamespace").html("<b>Nope!</b>");
            $("#question").empty();
            $("#time").html("Time Remaining: " + time + "S");
            $("#option1").html("<img src=" + questionsarr[index].picture +">" + "<br>");
            $("#option2").html("The correct answer was: " + rightanswer);
            $("#option3").html("");
            $("#option4").html("");
            index++;   
            time = 30;
           setTimeout(countdown, 2000);
        }
    }
    });



    $("#option2").on("click", function () {
        if(index != questionsarr.length) {
            if (questionsarr[index].a2.correct == true) {
                clearInterval(intervalId);
                $("#gamespace").html("");
                $("#question").html("Time Remaining: " + time + "S");
                $("#option1").text("Correct!");
                $("#option2").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                $("#option3").html("");
                $("#option4").html("");
                correct++;
                index++; 
                setTimeout(countdown, 2000);
            }
            else {
                clearInterval(intervalId);
                var rightanswer = getrightanswer(index);
                incorrect++;
                $("#gamespace").html("<b>Nope!</b>");
                $("#option1").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                $("#option2").html("The correct answer was: " + rightanswer);
                $("#option3").html("");
                $("#option4").html("");
                index++;   
                time = 30;
                setTimeout(countdown, 2000);
            }
            
        }
        });

        $("#option3").on("click", function () {
            if(index != questionsarr.length) {
                if (questionsarr[index].a3.correct == true) {
                    clearInterval(intervalId);
                    $("#gamespace").html("");
                    $("#question").html("Time Remaining: " + time + "S");
                    $("#option1").text("Correct!");
                    $("#option2").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                    $("#option3").html("");
                    $("#option4").html("");
                    correct++;
                    index++; 
                    setTimeout(countdown, 2000);
                }
                else {
                    clearInterval(intervalId);
                    var rightanswer = getrightanswer(index);
                    incorrect++;
                    $("#gamespace").html("<b>Nope!</b>");
                    $("#option1").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                    $("#option2").html("The correct answer was: " + rightanswer);
                    $("#option3").html("");
                    $("#option4").html("");
                    index++;   
                    time = 30;
                    setTimeout(countdown, 2000);
                }
                
            }
            });
            $("#option4").on("click", function () {
                if(index != questionsarr.length) {
                    if (questionsarr[index].a4.correct == true) {
                        clearInterval(intervalId);
                        $("#gamespace").html("");
                        $("#question").html("Time Remaining: " + time + "S");
                        $("#option1").text("Correct!");
                        $("#option2").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                        $("#option3").html("");
                        $("#option4").html("");
                        correct++;
                        index++; 
                        setTimeout(countdown, 2000);
                    }
                    else {
                        clearInterval(intervalId);
                        var rightanswer = getrightanswer(index);
                        incorrect++;
                        $("#gamespace").html("<b>Nope!</b>");
                        $("#option1").html("<img src=" + questionsarr[index].picture +">" + "<br>");
                        $("#option2").html("The correct answer was: " + rightanswer);
                        $("#option3").html("");
                        $("#option4").html("");
                        index++;   
                        time = 30;
                        setTimeout(countdown, 2000);
                    }
                    
                }
                });

        $("#startover").on("click", function () {
            $("#question").empty();
            $("#option1").empty();
            $("#option2").empty();
            $("#option3").empty();
            $("#option4").empty();
            $("#startover").empty();
            time = 30;
            index=0;
            game();


        });

function game() {

    countdown();

}


$("#start").on("click", function () {
    game();
});