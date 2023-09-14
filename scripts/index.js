//References
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
// let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let quizArray;

//Questions and Options array

if (window.location.pathname === '/index.html' || '/') {
  quizArray = [
    {
      id: "0",
      question: "С собой на рыбалку обязательно нужно взять:",
      options: ["Удочку", "Прикормку", "Настю"],
      correct: "Настю",
    },
    {
      id: "1",
      question: "При применении какой оснастки рыба вообще не чувствует веса кормушки при поклевке?",
      options: ["Симметричная петля", "Инлайн", "Ассиметричная петля"],
      correct: "Инлайн",
    },
    {
      id: "2",
      question: "Какая из этих рыб хищная?",
      options: ["Окунь", "Лещ", "Густера"],
      correct: "Окунь",
    },
    {
      id: "3",
      question: "Как называется популярная каша-прикормка для ловли леща?",
      options: ["Салапинская", "Мичуринская", "Мамаевская"],
      correct: "Салапинская",
    },
    {
      id: "4",
      question: "Поплавочная снасть для дальнего заброса?",
      options: ["Фидер", "Резинка", "Матч"],
      correct: "Матч",
    },
    {
      id: "5",
      question: "Насадка в виде крупных ровных шариков для ловли карпа?",
      options: ["Ваглеры", "Бойлы", "Колобки"],
      correct: "Бойлы",
    },
    {
      id: "6",
      question: "Часть лодки, на которую крепится лодочный мотор?",
      options: ["Транец", "Раструп", "Киль"],
      correct: "Транец",
    },
    {
      id: "7",
      question: "Дополнительный тормоз катушки, отвечающий за полностью свободный сход лески во время поклевки крупной рыбы?",
      options: ["Фрикцион", "Род под", "Байтранер"],
      correct: "Байтранер",
    },
    {
      id: "8",
      question: "Как называется тип воблеров, идеально подходящих для техники твичинг?",
      options: ["Краулер", "Шэд", "Минноу"],
      correct: "Минноу",
    },
    {
      id: "9",
      question: "Как называется царская селёдка?",
      options: ["Уклейка", "Ряпушка", "Скумбрия"],
      correct: "Ряпушка",
    },
    {
      id: "10",
      question: "Как называется рыба, которая водится в пресной воде, но относится к морским видам рыб?",
      options: ["Налим", "Нельма", "Пескарь"],
      correct: "Налим",
    },
    {
      id: "11",
      question: "Как называется крайнее кольцо на конце спиннинга?",
      options: ["Колечко", "Цветок", "Тюльпан"],
      correct: "Тюльпан",
    },
    {
      id: "12",
      question: "Что обозначает сокращение НХНЧ, используемое рыболовами при общении в переписках?",
      options: ["Ни Хами, Ни Чета", "Ни хрена, Ни Чего", "Ни Хвоста, Ни Чешуи"],
      correct: "Ни Хвоста, Ни Чешуи",
    },
    {
      id: "13",
      question: "Какими словами, спиннингисты называют безынерционную катушку?",
      options: ["Мясорубка", "Веретено", "Крутилка"],
      correct: "Мясорубка",
    },
    {
      id: "14",
      question: "С чем сравнивают глухой спиннинг с экстра быстрым строем?",
      options: ["С бревном", "С палкой", "С дубиной"],
      correct: "С палкой",
    },
    {
      id: "15",
      question: "Как называют реку, которая вытекает из водоёма?",
      options: ["Вуокса", "Вёкса", "Весна"],
      correct: "Вёкса",
    },
    {
      id: "16",
      question: "Как называется приманка на хищника, которая монтируется на проволочный уголок и состоит из двух разных приманок?",
      options: ["Спиннер", "Спиннербейт", "Спиннинг"],
      correct: "Спиннербейт",
    },
    {
      id: "17",
      question: "Что обозначает словосочетание 'встать на растяжку' в рыболовном лексиконе?",
      options: ["Наткнуться на старую военую мину", "Встать с утра по раньше, для того чтобы сделать зарядку", "Поставить лодку на два якоря, с кормы и с носу"],
      correct: "Поставить лодку на два якоря, с кормы и с носу",
    },
    {
      id: "18",
      question: "Как называется поверхностный воблер?",
      options: ["Поппер", "Минноу", "Диппер"],
      correct: "Поппер",
    },
  ];
} else if (window.location.pathname === '/next.html') {
  quizArray = [
    {
      id: "0",
      question: "Наше будущее животное?",
      options: ["Кошечка", "Кролик", "Собачка"],
      correct: "Кошечка",
    },
    {
      id: "1",
      question: "Начало наших отношений:",
      options: ["20.09.2017", "20.09.2015", "20.09.2016"],
      correct: "20.09.2016",
    },
    {
      id: "2",
      question: "Любимый цвет Насти?",
      options: ["Фуксия", "Фиолет", "Фисташка"],
      correct: "Фуксия",
    },
    {
      id: "3",
      question: "Я тебя люблю…",
      options: ["И я тебя", "Я люблю тебя", "Я тебя тоже"],
      correct: "Я люблю тебя",
    },
  ]; 
}

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

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
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
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
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



