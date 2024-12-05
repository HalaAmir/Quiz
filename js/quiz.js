
export class Quiz {
  constructor(questions) {
    // console.log(questions)
    // document.getElementById('question').innerHTML=questions[0].question;
    this.questionsdata = questions;
    document.getElementById('next').addEventListener('click',this.nextQuestion.bind(this))

    $('#tryBtn').click(function(){
      // console.log('jjjjjj')
      $('#finish').fadeOut(500,()=>{
        $('#setting').fadeIn(500)
      })
    })

    this.currentQuestion = 0;
    this.questionsdatalength=this.questionsdata.length;
    this.score=0;

    this.displayquestions();
  }

  shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

 

  displayquestions() {
    //  console.log(this.questionsdata)
    // document.getElementById('question').innerHTML=this.questionsdata[0].question;
    document.getElementById("question").innerHTML =
      this.questionsdata[this.currentQuestion].question;
    let answers = [
      this.questionsdata[this.currentQuestion].correct_answer,
      ...this.questionsdata[this.currentQuestion].incorrect_answers,
    ];

    console.log(answers);
   this.shuffle(answers);
    console.log(answers);
   
    let answerRow = "";
    for (let i = 0; i < answers.length; i++) {
      answerRow += `   <label class="form-check-label">
        <input type="radio" class="form-check-input" name="answer"  value="${answers[i]}"
            >
        ${answers[i]}
    </label> <br>`;
    }
    document.getElementById("rowAnswer").innerHTML = answerRow;
    document.getElementById('currentQuestion').innerHTML=this.currentQuestion+1;
    document.getElementById('totalNumberOfQuestions').innerHTML=this.questionsdatalength;

  }

   

  nextQuestion(){
// alert('vggf')
// console.log (Array.from (document.getElementsByName('answer')).filter((el)=>{return el.checked})[0].value);
if(Array.from (document.getElementsByName('answer')).filter(el=> el.checked).length !=0){
  $('#alert').fadeOut(500);
  let userAnswer=Array.from (document.getElementsByName('answer')).filter((el)=>{return el.checked})[0].value;
  let correctAnswer=this.questionsdata[this.currentQuestion].correct_answer;
  this.checkanswer(userAnswer,correctAnswer);
  
  this.currentQuestion++;
  console.log(this.currentQuestion)
  // this.displayquestions()
  
  if(this.questionsdatalength>this.currentQuestion){
    
    this.displayquestions()
  }
  else{
    // alert(this.score)
    $('#score').text(this.score)
    $('#quiz').fadeOut(500,function(){
      $('#finish').fadeIn(500)
    })
  }
}else{
  $('#alert').fadeIn(500);
}




  }



  checkanswer(userAnswer,correctAnswer){
    if(userAnswer==correctAnswer){
      this.score++;
    $('#Correct').fadeIn(500).fadeOut(500)
    }else{
      $('#inCorrect').fadeIn(500).fadeOut(500)
    }
  }
}


