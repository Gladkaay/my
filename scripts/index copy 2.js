//References
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.querySelector(".restart");
// let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
// let display = document.querySelector(".display-container2");
let question = document.querySelector(".question");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let quizArray;
let quizArray1, quizArray2, quizArray3;

quizArray = [
  {
    id: "0",
    question: "До того, как была открыта гора Эверест, какая гора была самой высокой в мире?",
    options: ["Гора Эверест"],
    correct: "Гора Эверест",
  },
  {
    id: "1",
    question: "Что у женщины 2, а у коровы четыре?",
    options: ["Ноги"],
    correct: "Ноги",
  },
  {
    id: "2",
    question: "Ты участвуешь в забеге и обгоняешь человека, занявшего 2-место. На каком месте ты сейчас? ",
    options: ["На втором месте"],
    correct: "На втором месте",
  },
  {
    id: "3",
    question: "Может ли пингвин назвать себя птицей?",
    options: ["Пингвин не может говорить"],
    correct: "Пингвин не может говорить",
  },
  {
    id: "4",
    question: "Что твердое входит в меленькую дырочку?",
    options: ["Ключ"],
    correct: "Ключ",
  },
  {
    id: "5",
    question: "У одних мужчин длиннее, а у других короче. Их жены используют это.",
    options: ["Фамилия"],
    correct: "Фамилия",
  },
  {
    id: "6",
    question: "Ты не сможешь это попробовать, пока не разденешь.",
    options: ["Банан"],
    correct: "Банан",
  },
  {
    id: "7",
    question: "Из какой посуды нельзя ничего съесть?",
    options: ["Из пустой"],
    correct: "Из пустой",
  },
  {
    id: "8",
    question: "Что белое и липкое, что лучше выплюнуть, чем проглотить?",
    options: ["Зубная паста"],
    correct: "Зубная паста",
  },
  {
    id: "9",
    question: "На какое дерево садится ворона во время дождя?",
    options: ["На мокрое"],
    correct: "На мокрое",
  },
  {
    id: "10",
    question: "Какой болезнью на земле не болеют?",
    options: ["Морской"],
    correct: "Морской",
  },
  {
    id: "11",
    question: "Сколько книг можно положить в рюкзак объемом 40 литров, чтобы он не был пустым?",
    options: ["Одну"],
    correct: "Одну",
  },
  {
    id: "12",
    question: "Что входит сухим и твердым, а выходить мягким и влажным?",
    options: ["Макароны"],
    correct: "Макароны",
  },
  {
    id: "13",
    question: "Один мужчина мог предугадывать счет матча до его начала. Каким образом?",
    options: ["До начала матча счет 0:0"],
    correct: "До начала матча счет 0:0",
  },
  {
    id: "14",
    question: "Что может пройти сквозь стекло, не разбив его?",
    options: ["Свет"],
    correct: "Свет",
  },
  {
    id: "15",
    question: "3 яйца варятся 5 минут, а сколько варится 6 яиц?",
    options: ["Тоже 5 минут"],
    correct: "Тоже 5 минут",
  },
  {
    id: "16",
    question: "Как можно выдержать 14 дней без сна?",
    options: ["Спать по ночам"],
    correct: "Спать по ночам",
  },
  {
    id: "17",
    question: "Два игрока в компьютерной игре сыграли по 5 игр. Один выиграл 4 раза, а второй 2 раза. Как это возможно, если они говорят правду?",
    options: ["Они не играли друг против друга"],
    correct: "Они не играли друг против друга",
  },
  {
    id: "18",
    question: "Как глубоко можно зайти в лес?",
    options: ["Наполовину, а дальше уже выходишь"],
    correct: "Наполовину, а дальше уже выходишь",
  },
  {
    id: "19",
    question: "Какой будет синий камень, если бросить его в Красное море?",
    options: ["Мокрый"],
    correct: "Мокрый",
  },
  {
    id: "20",
    question: "Электричка двигается со скоростью 100 км/ч, а ветер дует навстречу со скоростью 10 км/ч. С какой скоростью распространяется дым?",
    options: ["Электропоезд не дымит"],
    correct: "Электропоезд не дымит",
  },
  {
    id: "21",
    question: "Петух снес яйцо на крыше зеленого амбара? В какую сторону скатилось оно?",
    options: ["Петухи не несут яйца"],
    correct: "Петухи не несут яйца",
  },
  {
    id: "22",
    question: "Что тяжелее килограмм ваты или килограмм золота?",
    options: ["Одинаково"],
    correct: "Одинаково",
  },
]; 

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      // userScore.innerHTML =
      //   "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
    }
  })
);

const showAnswer = (quizCards, option) => {
  quizCards.addEventListener("click", () => {
    option.classList.remove("hide");
  });
}

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  // let options = question.querySelectorAll(".option-div");
  // options.forEach((element) => {
  //   if (element.innerText == quizArray[questionCount].correct) {
  //     element.classList.add("hide");
  //   }
  // });
  let option = question.querySelector(".option-div");
  option.classList.add("hide");
  showAnswer(quizCards[questionCount], option);
};



//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide", "container-mid2");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div">${i.options[0]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  // timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

// if (startScreen.classList.contains("hide")) {
//   let question = document.querySelector(".question");
//   question.addEventListener("click", () => {
//     let option = document.querySelector(".option-div");
//     option.classList.add("correct");
//     console.log("click");
//   });
// }

document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });

document.addEventListener('dblclick', (event) => {
  event.preventDefault()
}, { passive: false });