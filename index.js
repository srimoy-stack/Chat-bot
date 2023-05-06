const historyQuestions = [
  {
    question: "Who was the first President of the United States?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "John F. Kennedy",
    ],
    answer: "George Washington",
  },
  {
    question: "What year did World War II end?",
    options: ["1941", "1943", "1945", "1947"],
    answer: "1945",
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    options: [
      "Margaret Thatcher",
      "Angela Merkel",
      "Theresa May",
      "Indira Gandhi",
    ],
    answer: "Margaret Thatcher",
  },
  {
    question: "In what year did the Berlin Wall fall?",
    options: ["1985", "1987", "1989", "1991"],
    answer: "1989",
  },
];

const sportsQuestions = [
  {
    question: "Which country won the 2018 FIFA World Cup?",
    options: ["Brazil", "Germany", "France", "Spain"],
    answer: "France",
  },
  {
    question:
      "What is the highest score possible in a single frame of a standard game of ten-pin bowling?",
    options: ["10", "50", "100", "300"],
    answer: "300",
  },
  {
    question: "Who is the all-time leading scorer in NBA history?",
    options: [
      "Michael Jordan",
      "Kareem Abdul-Jabbar",
      "LeBron James",
      "Kobe Bryant",
    ],
    answer: "Kareem Abdul-Jabbar",
  },
  {
    question:
      "Which team has won the most Stanley Cup championships in NHL history?",
    options: [
      "Boston Bruins",
      "Montreal Canadiens",
      "Toronto Maple Leafs",
      "Detroit Red Wings",
    ],
    answer: "Montreal Canadiens",
  },
];

const mathQuestions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "4", "8", "16"],
    answer: "4",
  },
  {
    question: "What is 6 x 3?",
    options: ["12", "18", "24", "36"],
    answer: "18",
  },
  {
    question: "What is 10 / 2?",
    options: ["2", "3", "5", "10"],
    answer: "5",
  },
];

function startQuiz() {
  var score = 0;
  var questions = [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Venus"],
      answer: "Jupiter",
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Benjamin Franklin",
      ],
      answer: "Alexander Graham Bell",
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      answer: "Tokyo",
    },
    {
      question: "Who wrote the novel 'To Kill a Mockingbird'?",
      options: [
        "Mark Twain",
        "Harper Lee",
        "J.D. Salinger",
        "F. Scott Fitzgerald",
      ],
      answer: "Harper Lee",
    },
    {
      question: "What is the currency of Switzerland?",
      options: ["Euro", "Pound Sterling", "Swiss Franc", "US Dollar"],
      answer: "Swiss Franc",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
      answer: "Vatican City",
    },
    {
      question: "Who is credited with the discovery of penicillin?",
      options: [
        "Marie Curie",
        "Albert Einstein",
        "Alexander Fleming",
        "Louis Pasteur",
      ],
      answer: "Alexander Fleming",
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["Brazil", "France", "Germany", "Argentina"],
      answer: "France",
    },
    {
      question: "Who directed the movie 'Jaws'?",
      options: [
        "Steven Spielberg",
        "Martin Scorsese",
        "Alfred Hitchcock",
        "Francis Ford Coppola",
      ],
      answer: "Steven Spielberg",
    },
  ];

  var currentIndex = 0;

  // Shuffle the questions array
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  questions = shuffle(questions);

  function showQuestion() {
    var questionElement = document.createElement("div");
    questionElement.classList.add("chatbot-message");
    questionElement.innerHTML =
      "<p>" + questions[currentIndex].question + "</p>";
    var optionsElement = document.createElement("div");
    optionsElement.classList.add("chatbot-options");
    for (var i = 0; i < questions[currentIndex].options.length; i++) {
      var optionButton = document.createElement("button");
      optionButton.innerHTML = questions[currentIndex].options[i];
      optionButton.onclick = function () {
        if (this.innerHTML == questions[currentIndex].answer) {
          this.style.backgroundColor = "#228b22";
          this.style.color = "white";
          score++;
        } else {
          this.style.backgroundColor = "#8A0707";
          this.style.color = "white";
          for (var j = 0; j < optionsElement.childNodes.length; j++) {
            if (
              optionsElement.childNodes[j].innerHTML ==
              questions[currentIndex].answer
            ) {
              optionsElement.childNodes[j].style.backgroundColor = "#228b22";
              optionsElement.childNodes[j].style.color = "white";
            }
            optionsElement.childNodes[j].disabled = true;
          }
        }
        currentIndex++;
        if (currentIndex == questions.length) {
          endQuiz();
        } else {
          showQuestion();
        }
      };
      optionsElement.appendChild(optionButton);
    }

    questionElement.appendChild(optionsElement);
    chatbotBody.appendChild(questionElement);
  }

  function endQuiz() {
    var resultElement = document.createElement("div");
    var reset = document.createElement("button");
    reset.innerHTML = "Reset";
    resultElement.style.color = "#8A0707";
    resultElement.classList.add("chatbot-message-score");
    resultElement.innerHTML =
      "<p>You scored " + score + " out of " + questions.length + ".</p>";
    chatbotBody.appendChild(resultElement);
    chatbotBody.appendChild(reset);
    reset.addEventListener("click", () => {
      location.reload();
    });
    reset.classList.add("reset-btn");
  }

  var chatbotBody = document.querySelector(".chatbot-body");
  chatbotBody.innerHTML =
    "<div class='chatbot-message'><p>Welcome to the quiz! Are you ready to begin?</p></div>";
  var startButton = document.createElement("button");
  startButton.innerHTML = "Start Quiz";
  startButton.classList.add("button1");
  startButton.onclick = function () {
    chatbotBody.innerHTML =
      "<div class='chatbot-message'><p>Welcome to the quiz! Please select a quiz category.</p></div>";
    var mathButton = document.createElement("button");
    mathButton.classList.add("button1");
    mathButton.innerHTML = "Math Quiz";
    mathButton.onclick = function () {
      chatbotBody.innerHTML = "";
      questions = mathQuestions;
      showQuestion();
    };
    chatbotBody.appendChild(mathButton);

    var sportsButton = document.createElement("button");
    sportsButton.classList.add("button1");
    sportsButton.innerHTML = "Sports Quiz";
    sportsButton.onclick = function () {
      chatbotBody.innerHTML = "";
      questions = sportsQuestions;
      showQuestion();
    };
    chatbotBody.appendChild(sportsButton);

    var historyButton = document.createElement("button");
    historyButton.classList.add("button1");
    historyButton.innerHTML = "History Quiz";
    historyButton.onclick = function () {
      chatbotBody.innerHTML = "";
      questions = historyQuestions;
      showQuestion();
    };
    chatbotBody.appendChild(historyButton);
  };
  chatbotBody.appendChild(startButton);

  function toggleChatbot() {
    chatbot.classList.toggle("chatbot-open");
  }
}

function toggleChatbot() {
  var chatbot = document.querySelector(".chatbot");
  chatbot.classList.toggle("chatbot-open");
}

function toggleChatbot() {
  var chatbot = document.querySelector(".chatbot");
  chatbot.classList.toggle("chatbot-open");
}


// const messagesContainer = document.getElementById("chatbot-messages");
// const inputField = document.getElementById("chatbot-input");

// function sendMessage() {
//   const userInput = inputField.value.trim();
//   if (userInput) {
//     const userMessage = `<div class="user-message">${userInput}</div>`;
//     messagesContainer.innerHTML += userMessage;
//     // Code to generate bot response
//     inputField.value = "";
//   }
// }

inputField.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Enter key
    sendMessage();
  }
});
