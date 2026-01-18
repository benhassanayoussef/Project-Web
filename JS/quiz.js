const questions = [
    {
        question: "Which F1 regulation introduced ground-effect aerodynamics in modern era (2022)?",
        answers: ["Technical Regulations 2022", "Hybrid Era 2014", "Aero Ban 2020", "Cost Cap Regulation"],
        correct: "Technical Regulations 2022"
    },
    {
        question: "What is the maximum fuel flow rate allowed in Formula 1 engines?",
        answers: ["100 kg/h", "120 kg/h", "90 kg/h", "110 kg/h"],
        correct: "100 kg/h"
    },
    {
        question: "Which component recovers energy from exhaust gases?",
        answers: ["MGU-H", "MGU-K", "ERS", "Turbocharger"],
        correct: "MGU-H"
    },
    {
        question: "How many power unit elements are allowed per season (before penalties)?",
        answers: ["3", "4", "5", "2"],
        correct: "3"
    },
    {
        question: "Which tyre compound is mandatory to use during a dry race?",
        answers: ["Two different dry compounds", "Soft only", "Medium only", "Hard only"],
        correct: "Two different dry compounds"
    },
    {
        question: "What is the main purpose of the plank under an F1 car?",
        answers: [
            "Limit ride height and control ground effect",
            "Improve cooling",
            "Increase downforce",
            "Protect the gearbox"
        ],
        correct: "Limit ride height and control ground effect"
    },
    {
        question: "What happens if the plank wear exceeds the legal limit?",
        answers: ["Disqualification", "Time penalty", "Grid penalty", "Warning"],
        correct: "Disqualification"
    },
    {
        question: "Which flag requires a driver to let another car pass?",
        answers: ["Blue flag", "Yellow flag", "Black flag", "White flag"],
        correct: "Blue flag"
    },
    {
        question: "What does parc fermé restrict teams from doing?",
        answers: [
            "Major car setup changes",
            "Changing tyres",
            "Refueling",
            "Replacing wings"
        ],
        correct: "Major car setup changes"
    },
    {
        question: "Which FIA system limits team spending?",
        answers: ["Cost Cap", "Budget Freeze", "Financial Fair Play", "Spending Limit Act"],
        correct: "Cost Cap"
    },
    {
        question: "What is the maximum race distance excluding the formation lap?",
        answers: ["305 km", "300 km", "310 km", "290 km"],
        correct: "305 km"
    },
    {
        question: "Which condition allows DRS activation?",
        answers: [
            "Within 1 second of the car ahead at detection point",
            "Anytime on a straight",
            "After a pit stop",
            "Only in qualifying"
        ],
        correct: "Within 1 second of the car ahead at detection point"
    },
    {
        question: "What penalty is given for exceeding track limits repeatedly?",
        answers: [
            "Time penalty",
            "Drive-through",
            "Disqualification",
            "Grid drop"
        ],
        correct: "Time penalty"
    },
    {
        question: "Which compound is marked with a white stripe?",
        answers: ["Hard", "Medium", "Soft", "Intermediate"],
        correct: "Hard"
    },
    {
        question: "What is the primary role of the halo device?",
        answers: [
            "Driver head protection",
            "Aerodynamic stability",
            "Cooling the cockpit",
            "Reducing drag"
        ],
        correct: "Driver head protection"
    }
];

// Shuffle function (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate quiz
const quizForm = document.getElementById("quizForm");

questions.forEach((q, index) => {
    shuffle(q.answers);

    const div = document.createElement("div");
    div.classList.add("question");

    let html = `<p><strong>${index + 1}. ${q.question}</strong></p>`;

    q.answers.forEach(answer => {
        html += `
            <label>
                <input type="radio" name="q${index}" value="${answer}">
                ${answer}
            </label><br>
        `;
    });

    div.innerHTML = html;
    quizForm.appendChild(div);
});

// Submit quiz
function submitQuiz() {
    let score = 0;
    let feedback = "<h4>Correct Answers:</h4><ul>";

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
        feedback += `<li>${index + 1}. ${q.correct}</li>`;
    });

    feedback += "</ul>";

    document.getElementById("result").innerHTML =
        `Your score: ${score} / ${questions.length}`;

    document.getElementById("answers").innerHTML = feedback;
}
