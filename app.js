
var questions = [
  "In JavaScript, which of these elements is used to store and manipulate text?",
  "Which of these data types supports returning true or false value, usually seen in conditional statements?",
  "If you wished to convert the data of a string into an integer, which of these methods from the native JavaScript library would you use?"
]
var answers = [
  "String",
  "Array",
  "Float",


  "Function",
  "Integer",
  "Boolean",


  "valueOf",
  "parseInt",
  "toString",
]

var count = 0;
var countLimit = 3;
var qCount = 1;
var qNum = 0;
var score = 100;

function loadQuestion() {
  for (; count < countLimit; count++) {
    for (i = 0; i < questions.length; i++) {
      document.getElementById("questionNum").innerText = `Question ${qCount}`
    }
    document.getElementById("question").innerText = `${questions[qNum]}`
    var node = document.createElement("li");
    node.className = "list-group-item blackText d-flex justify-content-between align-items-center";
    node.innerText = `${answers[count]}`
    if (node.innerText == "String" || node.innerText == "Boolean" || node.innerText == "parseInt") {
      node.id = "correct"
    } else {
      node.id = "inc"
    }
    document.getElementById("choices").append(node);
  }
  console.log(`loading`)
  countLimit += 3;
  qCount++;
  qNum++;
}

loadQuestion();

document.getElementById("correct").addEventListener('click', () => {
  document.getElementById("check").innerHTML = `<button id="next" class="btn btn-light" onclick="loadNextQuestion()">Next</button>`
  document.getElementById("solved").style.color = "turquoise"
  document.getElementById("solved").innerText = "you right !!!";
});

document.getElementById("inc").addEventListener('click', () => {
  document.getElementById("solved").style.color = "pink"
  document.getElementById("solved").innerText = "nah that aint it";
  score -= 33;
});

function showResults() {
  
  window.location.replace("./results.html")
  document.getElementById("scoreResult").innerText = "owo";
}

function loadNextQuestion() {
  if (qNum <= 2) {
    document.getElementById("choices").innerHTML = "";
    document.getElementById("solved").innerHTML = "";
    loadQuestion();
    console.log(count)
    console.log(countLimit)
    console.log(qNum)
  } else {
    document.getElementById("finish").innerHTML = `<button id="finish" class="btn btn-light" onclick="showResults()">Finish</button>`
  }
}


// function loadQuestion2() {
//   for (i = 0; i < 3; i++) {
//     document.getElementById("question").innerText = `${questions[1]}`
//     var node = document.createElement("li");
//     node.className = "list-group-item blackText d-flex justify-content-between align-items-center";
//     node.innerText = `${answers2[i]}`
//     document.getElementById("choices").append(node);
//   }
// }

// function loadQuestion3() {
//   for (i = 0; i < 3; i++) {
//     document.getElementById("question").innerText = `${questions[2]}`
//     var node = document.createElement("li");
//     node.className = "list-group-item blackText d-flex justify-content-between align-items-center";
//     node.innerText = `${answers3[i]}`
//     document.getElementById("choices").append(node);
//   }
// }