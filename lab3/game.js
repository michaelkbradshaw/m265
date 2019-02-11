
// GLOBAL VARIABLES
var score_one = 0;
var score_two = 0;

  // create a switch variable; after going to next page
  // for player two, update a global variable to correspond
  // to incremented index for score[]
  // index 0 is player 1; index 1 is player 2.
var p_two_turn=false;

if (document.getElementById("who").innerText=="Game:Player 2"){
  p_two_turn=(localStorage.getItem("bool_player") == "true");
  score_one=parseInt(localStorage.getItem("p1"), 10);
  score_two=parseInt(localStorage.getItem("p2"), 10);
}

document.getElementById("score1").innerText="Player 1, Score: "+ score_one;
document.getElementById("score2").innerText="Player 2, Score: "+ score_two;
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

  var inputQ = "";
  var i;
  for (i=0; i<getElemId.length; i++) {
    inputQ += getElemId.elements[i].value;
  }
  document.getElementById("present").innerHTML=inputQ;

  // Compare user Answer Input to Answer -- INFORM CORRECTNESS
  document.getElementById("submit").disabled=true;
  var result;
  if (inputQ == answer){
    result = document.getElementById("result");
    result.innerText="Correct";
    if (p_two_turn==false)
    {
    score_one+=1;}

    else
    {
    score_two+=1;}
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
  document.getElementById("score1").innerText="Player 1, Score: "+ score_one;
  document.getElementById("score2").innerText="Player 2, Score: "+ score_two;
  // Open next level after all boxes have been clicked
  // PROBLEM: Cannot set disabled attributes, so cannot check this way
  // Update: using booleans in list instead. bools are set when image clicked

  if (permit[0] && permit[1] && permit[2] & (p_two_trun == false)) {
    //document.getElementById("procede").setAttribute("action", "second.html");
    document.getElementById("next").removeAttribute("disabled");
    //Time to change the score for player 2
    p_two_turn=true;
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
    document.getElementById("box1").setAttribute("src","images/Ast.jpg");
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
    document.getElementById("box2").setAttribute("src","images/Iraq.jpg");
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
    document.getElementById("box3").setAttribute("src","images/Caracas.jpg");
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
  localStorage.setItem("bool_player", p_two_turn);
  localStorage.setItem("p1", score_one);
  localStorage.setItem("p2", score_two);

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
      document.getElementById("box1").setAttribute("src","images/Canada.jpg")
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
      document.getElementById("box2").setAttribute("src","images/egypt.jpg")
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
      document.getElementById("box3").setAttribute("src","images/peru.jpg")
}

var win=function()
{
  if (permit[0] && permit[1] && permit[2])
  {
    
    document.getElementById("win").removeAttribute("disabled");
    if (score_one>score_two)
    {
      document.getElementById("win").innerText("Player 1 Wins")
    }
    else if (score_one<score_two)
    {
      document.getElementById("win").innerText("Player 2 Wins")
    }
    else
    {
      document.getElementById("win").innerText("Tie")
    }
  }


}
