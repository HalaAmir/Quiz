
import{Quiz}from './quiz.js';

export class Settings {
  constructor() {
    //  console.log("hello loley");
    this.categoryElement = document.getElementById("category");
    this.difficultyElement = document.getElementsByName("difficulty");
    this.numberOfQuestions = document.getElementById("numberOfQuestions");
    document.getElementById("startBtn") .addEventListener("click", this.startQuiz.bind(this));
  }

  async startQuiz() {
    // console.log(this.categoryElement.value);
    let category = this.categoryElement.value;
    // console.log( this.difficultyElement.value)
    //  console.log( Array.from(this.difficultyElement).filter((el)=>{  return el.checked})[0].value
    //  )
    let difficulty = Array.from(this.difficultyElement).filter((el) => {
      return el.checked;
    })[0].value;
    let numberQuestions = this.numberOfQuestions.value;
    // console.log(numberQuestions)

    let Api =`https://opentdb.com/api.php?amount=${numberQuestions}&category=${category}&difficulty=${difficulty}`;
    // console.log(Api);
if(numberQuestions==''){
    $('#alert1').fadeIn(500)
}else{
    $('#alert1').fadeOut(500)
}


   let questions=await this.fetchApi(Api);
   console.log(questions)
//    let quize= new Quiz();
if(questions.length>0){
    $('#setting').fadeOut(500,function(){
      $('#quiz').fadeIn(500);
    })
    let quize= new Quiz(questions);
}
   
  }

 async fetchApi(Api){
    let response =await fetch(Api);
    let responseJson=await response.json();
    return responseJson.results;
    // console.log( responseresult)
  }
}
