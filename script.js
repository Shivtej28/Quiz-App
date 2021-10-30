const queArr = [
    {
        question: "Who is our Prime Minister?",
        a: "Narendra Modi",
        b: "Rahul Gandhi",
        c: "Udhhav Thackrey",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which is not programming Language?",
        a: "Python",
        b: "Java",
        c: "Prettier",
        d: "Java Script",
        correct: "c"
    },
    {
        question: "Which is most used Programming Language?",
        a: "Python",
        b: "Java",
        c: "Prettier",
        d: "Java Script",
        correct: "d"
    },
    {
        question: "Who is CEO of Tesla?",
        a: "Elon Musk",
        b: "Rahul Gandhi",
        c: "Udhhav Thackrey",
        d: "None of the above",
        correct: "a"
    },
    {question: "What does HTML stands for?",
    a: "HyperText Markup Language",
    b: "HyperLink Makeup Language",
    c: "Helicopters Train Motorboats lamborghini",
    d: "None of the above",
    correct: "a"
    }
]

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button = document.getElementById("btn")
const answerEls = document.querySelectorAll(".answer");
    

showQuestion(currentQuestion);
function showQuestion(cq){
    questionEl.innerHTML = queArr[cq].question;
    a_text.innerHTML = queArr[cq].a 
    b_text.innerHTML = queArr[cq].b
    c_text.innerHTML = queArr[cq].c 
    d_text.innerHTML = queArr[cq].d
}

button.addEventListener("click", nextQuestion);

function getSelected(){
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
            
        }
    })
    return answer;
   // console.log(score);
}
function deselectAnswers(){
    answerEls.forEach(answerEl =>{
        answerEl.checked = false;
    })
}
function nextQuestion(){

   const ansId =  getSelected();
   console.log(ansId);
   if(ansId != undefined){
    if(ansId === queArr[currentQuestion].correct){
        score++;
        console.log(score);
    }
    deselectAnswers();
     currentQuestion++;
        if(currentQuestion < queArr.length){
            showQuestion(currentQuestion);
        }else{
            quiz.innerHTML = `
            <h2>
            You answerd correctly 
            ${score}/${queArr.length}
            </h2>

            <button onClick="location.reload()">
                Reload
            </button>`
        }
    
   }
   return;
    
    
}

