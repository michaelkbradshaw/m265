
var score = 0;
var extra = -1;
var cap;
var answer = "";
var answerArr = ["Canberra","Baghdad", "Caracas"];
var everything = [{country: "Australia", capital: "Canberra", question: "Is the capital of Australia Melbourne, Canberra, or Sydney?"},
{country: "Iraq", capital: "Baghdad", question: "What is the capital of Iraq?"},
{country: "Venezuela", capital: "Caracas", question: "What is the capital of Venezuela?"}];

var answerQ = function()
{
  var getElemId = document.getElementById("answer");
  console.log(getElemId);
  var inputQ = "";
  var i;
  for (i=0; i<getElemId.length; i++) {
    inputQ += getElemId.elements[i].value;
  }
  document.getElementById("present").innerHTML=inputQ;

  var result;
  if (inputQ == answer) {
    result = document.getElementById("result");
    result.innerText="Correct";
    score+=1;
    extra+=1;
    cap=score-extra;
    score=score+cap;
    document.getElementById("score").innerText="Score: "+cap;
  }
  else {
    result = document.getElementById("result");
    result.innerText="Incorrect";
    }

  var truth_b1 = getElementById("box1").getAttribute("disabled");
  var truth_b2 = getElementById("box2").getAttribute("disabled");
  var truth_b3 = getElementById("box3").getAttribute("disabled");
  if (truth_b1 && truth_b2 && truth_b3) {
    document.getElementById("procede").setAttribute("action", "second.html");
    document.getElementById("next").removeAttribute("disabled");
  }
}


var clicked_1 = function()
{
    document.getElementById("result").innerText="";
    document.getElementById("present").innerText="";

    var t = document.getElementById("box1");
    t.setAttribute("disabled", true);

    var x = document.getElementById("question");
    x.innerText=everything[0].question;
    answer = everything[0].capital;
}

var clicked_2 = function()
{
    document.getElementById("result").innerText="";
    document.getElementById("present").innerText="";

    var t = document.getElementById("box2");
    t.setAttribute("disabled", true);
    var x = document.getElementById("question");
    x.innerText=everything[1].question;
    answer = everything[1].capital;
}

var clicked_3 = function()
{
    document.getElementById("result").innerText="";
    document.getElementById("present").innerText="";

    var t = document.getElementById("box3");
    t.setAttribute("disabled", true);
    var x = document.getElementById("question");
    x.innerText=everything[2].question;
    answer = everything[2].capital;
}
