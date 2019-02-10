
var score = 0;
var answer = "";
var answerArr = ["Anananarivo", "Baghdad", "Caracas"];


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
  }
  else {
    result = document.getElementById("result");
    result.innerText="Incorrect";
    }

  var truth_b1 = getElementById("box1").getAttribute("disabled");
  var truth_b2 = getElementById("box2").getAttribute("disabled");
  var truth_b3 = getElementById("box3").getAttribute("disabled");
  if (truth_b1 && truth_b2 && truth_b3) {
    document.getElementById("procede").setAttribute("action", "level2.html");
  }
}


var clicked_1 = function()
{
    var t = document.getElementById("box1");
    t.setAttribute("disabled", "true");

    var x = document.getElementById("question");
    x.innerText="What is the capital of Madagascar?";
    answer = answerArr[0];
}

var clicked_2 = function()
{
    var t = document.getElementById("box2");
    t.setAttribute("disabled", "true");
    var x = document.getElementById("question");
    x.innerText="What is the capital of Iraq?";
    answer = answerArr[1];
}

var clicked_3 = function()
{
    var t = document.getElementById("box3");
    t.setAttribute("disabled", "true");
    var x = document.getElementById("question");
    x.innerText="";
    answer = answerArr[2];
}
