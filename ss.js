const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('login');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const audioPlayer = document.getElementById('audioPlayer');

let currentQuestionIndex = 0;
let score = 0;
let quizData;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    startQuiz();
});
 
function startQuiz() {
    quizData =[
        {
            question: "What is the name of this song?",
            song: "music/1.mp3",
            options: ["Dua Lipa ", "I dont wanna be you anymore", "Summer Love", "Break My Heart"],
            answer: "I dont wanna be you anymore"
        },
        {
            question: "What is the name of this song?",
            song: "music/2.mp3",
            options: ["Desert Dreams", "Arabic Nights", "Dhalma Msasik", "Sahara"],
            answer: "Dhalma Msasik"
        },
        {
            question: "What is the name of this song?",
            song: "music/3.mp3",
            options: ["Sands of Time", "Desert Rose", "Oasis", "Satalana"],
            answer: "Satalana"
        },
        {
            question: "What is the name of this song?",
            song: "music/4.mp3",
            options: ["Elyanna", "Tammly Mak", "Desert Moon", "Arabian Nights"],
            answer: "Tammly Mak"
        },
        {
            question: "What is the name of this song?",
            song: "music/5.mp3",
            options: ["I Want to Be Your Slave", "Freedom", "Rebel Heart", "Break Free"],
            answer: "I Want to Be Your Slave"
        },
        {
            question: "What is the name of this song?",
            song: "music/6.mp3",
            options: ["Balkan Beat", "Made in Romania", "Eastern Rhythms", "Carpathian Melodies"],
            answer: "Made in Romania"
        },
        {
            question: "What is the name of this song?",
            song: "music/7.mp3",
            options: ["Deira", "Saint Levaint", "City of Gold", "Golden Sands"],
            answer: "Deira"
        },
        {
            question: "What is the name of this song?",
            song: "music/8.mp3",
            options: ["Attack on Titan", "Epic Battle", "Warriors", "Defenders of the Wall"],
            answer: "Attack on Titan"
        },
        {
            question: "What is the name of this song?",
            song: "music/9.mp3",
            options: ["Ya Hob Asmany", "wait", "Desert Love", "Sands of Passion"],
            answer: "Ya Hob Asmany"
        },
        {
            question: "What is the name of this song?",
            song: "music/10.mp3",
            options: ["Zombie", "Undead", "Living Dead", "Haunted"],
            answer: "Zombie"
        }
    ];


    loadQuestion(quizData[currentQuestionIndex]);
}

function loadQuestion(questionData) {
    questionElement.innerText = questionData.question;
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.addEventListener('click', () => {
            if (option === questionData.answer) {
                alert("Correct!");
                score++;
            } else {
                alert("Wrong answer. Try again!");
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion(quizData[currentQuestionIndex]);
                audioPlayer.src = quizData[currentQuestionIndex].song;
                audioPlayer.play();
            } else {
                alert("Quiz completed! Your score is: " + score);
            }
        });
        optionsContainer.appendChild(optionElement);
    });
}
