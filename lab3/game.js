
// GLOBAL VARIABLES
var score_one = 0;
var score_two = 0;
  // create a switch variable; after going to next page
  // for player two, update a global variable to correspond
  // to incremented index for score[]
  // index 0 is player 1; index 1 is player 2.
var p = 0;
var score = [0,0]
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

// Compare user Answer Input to Answer
  var result;
  if (inputQ == answer) {
    result = document.getElementById("result");
    result.innerText="Correct";
    score[p]+=1;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("submit").disabled=true;
    document.getElementById("score").innerText="Player" + p+1 + ", Score: "+ score[p];
  }
  else if(inputQ==""){
    result = document.getElementById("result");
    result.innerText="Incorrect";
    document.getElementById("present").innerText="Invalid Entry: Submitted without entering. Try again!";

    }

  // Open next level after all boxes have been clicked
  // PROBLEM: Cannot set disabled attributes, so cannot check this way
  var truth_b1 = document.getElementById("box1").getAttribute("disabled");
  var truth_b2 = document.getElementById("box2").getAttribute("disabled");
  var truth_b3 = document.getElementById("box3").getAttribute("disabled");
  if (permit[0] && permit[1] && permit[2]) {
    document.getElementById("procede").setAttribute("action", "second.html");
    document.getElementById("next").removeAttribute("disabled");
    p=1;
  }
}


var clicked_1 = function()
{
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("result").innerText="";
    document.getElementById("present").innerText="";

    var t = document.getElementById("box1");
    t.setAttribute("disabled","");
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
    document.getElementById("present").innerText="";

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
    document.getElementById("present").innerText="";

    var t = document.getElementById("box3");
    t.disabled=true;
    permit[2]=true;

    var x = document.getElementById("question");
    x.innerText=everything[2].question;
    answer = everything[2].capital;
}
