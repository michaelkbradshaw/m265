
// GLOBAL VARIABLES
var score_one = 0;
var score_two = 0;
  // create a switch variable; after going to next page
  // for player two, update a global variable to correspond
  // to incremented index for score[]
  // index 0 is player 1; index 1 is player 2.
var p = 0;
var score = [0,0];
document.getElementById("score1").innerText="Player 1, Score: "+ score[0];
document.getElementById("score2").innerText="Player 2, Score: "+ score[1];
  // REAL ANSWER
var answer = "";
  // LIST OF OBJECTS (ANSWER KEY)
var permit = [false, false, false];
var everything =
[
{capital: "Canberra", question: "Is the capital of Australia Melbourne, Canberra, or Sydney?"},
{capital: "Baghdad", question: "What is the capital of Iraq?"},
{capital: "Caracas", question: "What is the capital of Venezuela?"},
{capital: "Ottawa", question: "Is the capital of Canada Toronto, Montreal, or Ottawa?"},
{capital: "Cairo", question: "What is the capital of Egypt?"},
{capital: "Lima", question: "What is the capital of Peru?"}];

// THIS FUNCTION IS CALLED BY CLICKING SUBMIT ANSWER ON WEBSPAGE
// ITS PURPOSE IS TO STORE INPUTS, COMPARE INPUTS TO ANSWER,
// AND ALLOW FOR LEVEL INCREASE
var answerQ = function()
{
  // Read and Store user Answer Input
  var getElemId = document.getElementById("answer");
  console.log(getElemId);
  var inputQ = "";
  var i;
  for (i=0; i<getElemId.length; i++) {
    inputQ += getElemId.elements[i].value;
  }
  document.getElementById("present").innerHTML=inputQ;

  // Compare user Answer Input to Answer -- INFORM CORRECTNESS
  document.getElementById("submit").disabled=true;
  var result;
  if (inputQ == answer) {
    result = document.getElementById("result");
    result.innerText="Correct";
    score[p]+=1;
    //document.getElementById("submit").removeAttribute("disabled");

    }
  // CHECK for INVLAID user INPUT, such as submitting without entering
  else if(inputQ==""){
    result = document.getElementById("result");
    result.innerText="Incorrect";
    document.getElementById("present").innerText="Invalid Entry: Submitted without entering. Try again!";
    }
  else {
    result = document.getElementById("result");
    result.innerText="Incorrect";
  }

  // Display Scores + Player 2 presents correctly -- IFORM SCORE
  // two problems: when icorrect, player1 score 0. then if correct after incorrect,
  // both scores increase at the same time
  // PRESS INC TWICE on last image to be clicked.. problem
  // BUG FIXED below. P was making it to P=2, where P=2 is not a
  // valid index, which caused problems

  if (p == 0) {
    document.getElementById("score1").innerText="Player 1, Score: "+ score[p];
    document.getElementById("score2").innerText="Player 2, Score: "+ score[p+1];
    }
  else if (p>1) {
    document.getElementById("score1").innerText="Player 1, Score: "+ score[p-2];
    document.getElementById("score2").innerText="Player 2, Score: "+ score[p-1];
  }

  else {
    document.getElementById("score1").innerText="Player 1, Score: "+ score[p-1];
    document.getElementById("score2").innerText="Player 2, Score: "+ score[p];
    }

  // Open next level after all boxes have been clicked
  // PROBLEM: Cannot set disabled attributes, so cannot check this way
  // Update: using booleans in list instead. bools are set when image clicked
  var truth_b1 = document.getElementById("box1").getAttribute("disabled");
  var truth_b2 = document.getElementById("box2").getAttribute("disabled");
  var truth_b3 = document.getElementById("box3").getAttribute("disabled");
  if (permit[0] && permit[1] && permit[2]) {
    //document.getElementById("procede").setAttribute("action", "second.html");
    document.getElementById("next").removeAttribute("disabled");
    //Time to change the score for player 2
    p=1;
  }
}


var clicked_1 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";


    var t = document.getElementById("box1");
    t.disabled=true;
    permit[0]=true;


    var x = document.getElementById("question");
    x.innerText=everything[0].question;
    answer = everything[0].capital;
}

var clicked_2 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";
    var t = document.getElementById("box2");
    t.disabled=true;
    permit[1]=true;
    var x = document.getElementById("question");
    x.innerText=everything[1].question;
    answer = everything[1].capital;
}

var clicked_3 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";

    var t = document.getElementById("box3");
    t.disabled=true;
    permit[2]=true;

    var x = document.getElementById("question");
    x.innerText=everything[2].question;
    answer = everything[2].capital;
}

//////////// NEXT PLAYER ////////////////

// this function is called by a button using onclick, which is enabled
// when all images have been clicked.
var goNext = function(){
  // reset/initialize for next Level
  // reset booleans responsible for level progression
  permit[0]=false;
  permit[1]=false;
  permit[2]=false;
  // reset disabled input image buttons
  document.getElementById('box1').disabled=false;
  document.getElementById('box2').disabled=false;
  document.getElementById('box3').disabled=false;
  window.location="second.html";

}
var clicked_4 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";
    var t = document.getElementById("box1");
    t.disabled=true;
    permit[0]=true;
    var x = document.getElementById("question");
    x.innerText=everything[3].question;
    answer = everything[3].capital;
}

var clicked_5 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";
    var t = document.getElementById("box2");
    t.disabled=true;
    permit[1]=true;
    var x = document.getElementById("question");
    x.innerText=everything[4].question;
    answer = everything[4].capital;
}
var clicked_6 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";
    var t = document.getElementById("box3");
    t.disabled=true;
    permit[2]=true;
    var x = document.getElementById("question");
    x.innerText=everything[5].question;
    answer = everything[5].capital;
}
