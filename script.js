let currentQuestionNumber = 0;

let questions = [
    {
        "question": "Was macht der Befehl console.log() in JavaScript?",
        "answer_1": "Er speichert Daten in einer Datei",
        "answer_2": "Er zeigt eine Fehlermeldung an",
        "answer_3": "Er gibt eine Nachricht in der Entwicklerkonsole aus",
        "answer_4": "Er lädt eine Webseite neu",
        "right_answer": 3
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für Webseiten verwendet?",
        "answer_1": "Python",
        "answer_2": "JavaScript",
        "answer_3": "C++",
        "answer_4": "Java",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet CSS?",
        "answer_1": "Creative Style Sheets",
        "answer_2": "Colorful Style Sheets",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Computer Style Sheets",
        "right_answer": 3
    },
    {
        "question": "Was ist eine Schleife (Loop) in der Programmierung?",
        "answer_1": "Ein HTML-Tag",
        "answer_2": "Eine Wiederholung von Anweisungen",
        "answer_3": "Ein Design-Element",
        "answer_4": "Ein Datenbankfeld",
        "right_answer": 2
    },
    {
        "question": "Welche dieser Sprachen ist keine Programmiersprache?",
        "answer_1": "Python",
        "answer_2": "HTML",
        "answer_3": "Java",
        "answer_4": "C#",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet das Kürzel 'IDE'?",
        "answer_1": "Internet Data Explorer",
        "answer_2": "Integrated Development Environment",
        "answer_3": "Internal Data Engine",
        "answer_4": "Interactive Design Element",
        "right_answer": 2
    },
    {
        "question": "Welche dieser Methoden zeigt eine Nachricht in JavaScript an?",
        "answer_1": "print()",
        "answer_2": "echo()",
        "answer_3": "log()",
        "answer_4": "alert()",
        "right_answer": 4
    },
    {
        "question": "Was ist ein Array?",
        "answer_1": "Ein Fehler im Code",
        "answer_2": "Eine Sammlung von Werten",
        "answer_3": "Eine Funktion",
        "answer_4": "Ein Stil in CSS",
        "right_answer": 2
    },
    {
        "question": "Welche Datei-Endung hat eine JavaScript-Datei?",
        "answer_1": ".html",
        "answer_2": ".css",
        "answer_3": ".js",
        "answer_4": ".py",
        "right_answer": 3
    },
    {
        "question": "Wofür wird Python häufig verwendet?",
        "answer_1": "Maschinelles Lernen",
        "answer_2": "Webentwicklung",
        "answer_3": "Automatisierung",
        "answer_4": "Alle genannten",
        "right_answer": 4
    }
]


function init() {
    document.getElementById('TotalNumberOfQuestions').innerHTML = questions.length;
    document.getElementById('current_question_number').innerHTML = currentQuestionNumber+1;
    ShowQuestion();
}

function ShowQuestion() {
    let question = questions[currentQuestionNumber];
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function nextQuestion(){
    if(currentQuestionNumber<9){currentQuestionNumber++};
    document.getElementById('current_question_number').innerHTML = currentQuestionNumber+1;
    ShowQuestion();
}

function previousQuestion(){
    if(currentQuestionNumber>0){currentQuestionNumber--};
    document.getElementById('current_question_number').innerHTML = currentQuestionNumber+1;
    ShowQuestion(); 
}

function answer(selection){
    
}