//booleans for questions
var qAns = false;
var q1Ans = false;
var q2Ans = true;
var q3Ans = true;
var q4Ans = true;
var q5Ans = true;
var q6Ans = true;
var q7Ans = true;
var q8Ans = true;
var q9Ans = true;
var q10Ans = true;
//Answers
var userAnswer = []
var Ans = ["Griffandor", "Seeker", "Voldemort", "Immortality", "A three headed dog", "Sense Death", "Control", "Professor lupin", "Peter Pettigrew", "Headwig"]
var score;
//question timer
var QRunning=false;
var question;
var timerQ = 10;
//answer timer
var ARunning=false;
var answer;
var timerA = 2;

$(document).ready(function(){
    // clear state of game to start fresh
    function startGame(){
        qAns = false;
        q1Ans = false;
        q2Ans = true;
        q3Ans = true;
        q4Ans = true;
        q5Ans = true;
        q6Ans = true;
        q7Ans = true;
        q8Ans = true;
        q9Ans = true;
        q10Ans = true;
        score = 0;
        timerQ = 10
        timerA = 2
        $("#restart").hide()
        $("#Q1").show();
        $("#Q2").hide();
        $("#Q3").hide();
        $("#Q4").hide();
        $("#Q5").hide();
        $("#Q6").hide();
        $("#Q7").hide();
        $("#Q8").hide();
        $("#Q9").hide();
        $("#Q10").hide();
        questionT();
        }
    //Set the question display timer
    function questionT(){
        if (!QRunning) {
            timerQ=10
            QRunning = true;
            question = setInterval(countDown, 1000);
        }
    }
    //display question timer
    function countDown(){
        timerQ--;
        $("#display").html(timerQ)
        //if not answered show answer
        if(timerQ === 0){
            qAns=true;
            clearQ();
            showAns()
            answerT()
        }
    }
    //clear the question timer
    function clearQ(){
        clearInterval(question)
        QRunning=false;
    }
    //set answer display timer
    function answerT(){
        if (!ARunning) {
            timerA=2
            ARunning = true;
            answer = setInterval(ansCount, 1000);
        }
    }
    //display answer timer
    function ansCount(){
        timerA--;
        //if answer timer hit 0 move to next question and remove class for wrong and right answers
        if(timerA === 0){
            qAns = false;
            clearA();
            removeAns()
            changeQ()
            questionT()
        }
    }
    function clearA(){
        clearInterval(answer)
        ARunning=false;
    }
    //option to restart game without refreshing screen
    $("#restart").on("click", function(){
        startGame()
        
    })
    
    // capture button press compare to answer
    $("input:button").on("click",function(e){
            e.preventDefault();
            if(QRunning){
            var text = $(this).attr('value'); 
            userAnswer.splice(0,1, text)
            console.log(userAnswer)
            qAns = true;
            clearQ()  
            checkAns()
            }
    });
    //change question displayed and restart question timer
    function changeQ(){
        if (!q1Ans){
            $("#Q1").hide();
            q1Ans = true;
            q2Ans = false;
            $("#Q2").show();

        }
        else if (!q2Ans){
            $("#Q2").hide()
            q2Ans = true;
            q3Ans = false;
            $("#Q3").show()
        }
        else if (!q3Ans){
            $("#Q3").hide()
            q3Ans = true;
            Ans.splice(1,2)
            q4Ans = false;
            $("#Q4").show()
            console.log(Ans)
        }
        else if (!q4Ans){
            $("#Q4").hide()
            q4Ans = true;
            q5Ans = false;
            $("#Q5").show()
        }
        else if (!q5Ans){
            $("#Q5").hide()
            q5Ans=true;
            q6Ans = false;
            $("#Q6").show()
        }
        else if (!q6Ans){
            $("#Q6").hide()
            q6Ans = true;
            q7Ans = false;
            $("#Q7").show()
        }
        else if (!q7Ans){
            $("#Q7").hide()
            q7Ans = true;
            q8Ans = false;
            $("#Q8").show()
        }
        else if (!q8Ans){
            $("#Q8").hide()
            q8Ans = true;
            q9Ans = false;
            $("#Q9").show()
        }
        else if (!q9Ans){
            $("#Q9").hide()
            q9Ans = true;
            q10Ans = false;
            $("#Q10").show()
        }
        else if (!q10Ans){
            q10Ans=true;
            $("#display").text("You scored "+score+ "%")
            $("#Q10").hide()
            $("#restart").show()
            
        };
}
    //compare answer with User input
    function checkAns(){
        if(userAnswer==Ans[0]){
            score += 10
            showAns()
        }
        else if (userAnswer==Ans[1]){
            score +=10
            showAns()
        }
        else if (userAnswer==Ans[2]){
            score +=10
            showAns()
        }
        else if (userAnswer==Ans[3]){
            score +=10
            showAns()
        }
        else if (userAnswer==Ans[4]){
            score +=10
            showAns()
        }
        else if (userAnswer==Ans[5]){
            score +=10
            showAns()
        }
        else if (userAnswer==Ans[6]){
            score +=10
            showAns()
        }
        else if (userAnswer==Ans[7]){
            score +=10  
            showAns()     
        }
        else if (userAnswer==Ans[8]){
            score +=10;
            showAns()
        }
        else if(userAnswer==Ans[9]){
            score+=10;
            showAns()
            
        } else{
            showAns()
            
        }
        
    }
        
    
    function showAns(){
        
            $(".right").addClass("btn-success")
            $(".wrong1").addClass("btn-danger")
            $(".wrong2").addClass("btn-danger")
            $(".wrong3").addClass("btn-danger")
            answerT()
    }
    function removeAns (){
        
            $(".right").removeClass("btn-success")
            $(".wrong1").removeClass("btn-danger")
            $(".wrong2").removeClass("btn-danger")
            $(".wrong3").removeClass("btn-danger")
            questionT()

    }
    
    startGame();
    
        
});



