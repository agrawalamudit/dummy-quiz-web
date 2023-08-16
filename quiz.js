let score = document.getElementsByClassName("score")[0];
let ques = document.getElementsByClassName("ques")[0];
let optlabels = document.querySelectorAll(".options label");
let opt = document.getElementsByName("op");
let questionBox = document.getElementById("questions");
console.log(questionBox);

const questions = [
  {
    q: "2+2",
    a: 4,
    options: [5, 4, 3, 2],
  },
  {
    q: "2*2*0",
    a: 0,
    options: [22, 4, 0, 2],
  },
  {
    q: "3+3-3",
    a: 3,
    options: [9, 3, 33, 333],
  },
  {
    q: "4*4/2",
    a: 8,
    options: [8, 16, 4, 44],
  },
];

let indx = 0;
let total_score = 0;
let rdx;
ques.innerText = questions[indx].q;

for (let x = 0; x < optlabels.length; x++) {
  optlabels[x].innerText = `${questions[indx].options[x]}`;
}

x();

function x() {
  rdx = setInterval(function () {
    logic();
    
    if (indx == 4) {
      explode();
      scoreWindow();
      return;
    }


    ques.innerText = questions[indx].q;

    for (let x = 0; x < optlabels.length; x++) {
      optlabels[x].innerText = `${questions[indx].options[x]}`;
    }


  }, 3000);
}

function logic() {

  for (let i = 0; i < opt.length; i++) {
    if (opt[i].checked) {
      // console.log(indx, i,questions[indx].options, questions[indx].a)
      if (questions[indx].options[i] == questions[indx].a) {
        total_score++;
      }
    }
  }

  for (let i = 0; i < opt.length; i++) {
    opt[i].checked = false;
  }

  indx++;
}

function explode() {
  clearInterval(rdx);
}

function scoreWindow() {
  // console.log(total_score);
  questionBox.innerHTML = `<p>this is your score: ${total_score} </p>`;
}
