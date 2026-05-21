const apiKey = "SUA_CHAVE_DE_API_AQUI"; // Substitua pela sua chave de API do Google Cloud
const model = "gemini-2.5-flash";
const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

const topicInput = document.getElementById("topicInput");
const generateBtn = document.getElementById("generateBtn");
const quizContainer = document.getElementById("quizContainer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let quizData = []; //é aqui que vamos guardar as perguntas que a IA devolver (cada item será um objeto como question, options e answer)
let currentQuestion = 0; //indica qual índice da lista quizData estamos exibindo agora.
let score = 0; //vamos incrementar essa variável cada vez que o usuário acertar uma pergunta.

generateBtn.addEventListener("click", handleGenerateQuiz);
nextBtn.addEventListener("click", handleNextQuestion);
restartBtn.addEventListener("click", handleRestartQuiz);

function handleGenerateQuiz() {
  const topic = topicInput.value.trim();
  if (!topic) {
    alert("Por favor, digite um tema para gerar o quiz.");
    return;
  }

  fecthQuiz(topic);
}

async function fecthQuiz(topic) {
  try {
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `Crie 5 perguntas de múltipla escolha sobre ${topic}.
O retorno deve ser um JSON no formato:
[
  {
    "question": "Pergunta aqui",
    "options": ["A", "B", "C", "D"],
    "answer": "Resposta correta"
  }
]`,
          },
        ],
      },
    ];

    const response = await fetch(geminiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
      }),
    });

    const data = await response.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResponse) {
      throw new Error("Resposta inesperada da API");
    }

    const cleaned = textResponse.replace(/```json|```/g, "").trim();
    quizData = JSON.parse(cleaned);
    if (!Array.isArray(quizData) || quizData.length === 0) {
      throw new Error("Quiz inválido");
    }

    startQuiz();
  } catch (error) {
    console.error(error);
    alert("Erro ao gerar quiz! Tente novamente.");
  }
}

function startQuiz() {
  score = 0;
  currentQuestion = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerText = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("optionBtn");
    btn.addEventListener("click", () => selectAnswer(btn, q.answer));
    optionsEl.appendChild(btn);
  });

  nextBtn.classList.add("hidden");
}

function selectAnswer(button, correctAnswer) {
  const buttons = document.querySelectorAll(".optionBtn");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (button.innerText === correctAnswer) {
    score++;
  } else {
    button.classList.add("incorrect");
  }

  nextBtn.classList.remove("hidden");
}

function handleNextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

function handleRestartQuiz() {
  resultContainer.classList.add("hidden");
  quizContainer.classList.add("hidden");
  topicInput.value = "";
}
