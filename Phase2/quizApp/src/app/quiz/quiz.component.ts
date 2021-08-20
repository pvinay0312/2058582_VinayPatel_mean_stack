import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { question } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: question[] = [];
  listUrl = environment.questionsListUrl;
  quizs = 'javascript';
  quizStep: boolean = false;
  userDetailsStep: boolean = false;
  quizResultStep: boolean = false;
  username: string = '';
  quizCategory: string = '';
  currentIndex: number = 0;
  singleQuestion!: question;
  answerBtnPress: boolean = false;
  answersList: any[] = [];
  lastScore!: Number;
  lastScoreGrade!: string;
  title: any;

  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit() {
    this.resetQuiz();
  }
  userDetails = new FormGroup({
    userName: new FormControl('', Validators.required),
  //   selectQuiz: new FormControl('', Validators.required)
  });
  startQuiz() {
    this.userDetailsStep = false;
    this.quizStep = true;
    const url = `${this.listUrl}`;
    this.http.get<question>(url)
        .subscribe(data => {
          data['questions'].forEach((question) => {
            this.questions.push(question);
          });
          if(this.questions.length > 0) {
            this.setQuestion(this.currentIndex);
          }
        });
        console.log(this.questions);
  }
  setQuestion(i: any) {
    this.singleQuestion = this.questions[i];
    console.log(this.singleQuestion);
    if(this.questions.length - 1 == this.currentIndex) {
      this.el.nativeElement.querySelector('.next-btn').textContent = "Submit Answers"
    }
    this.answersList.push({
      id: this.singleQuestion.id,
      isCorrect: null,
      pressedAnswer: null
    });
  }
  sortingQuestions(list: any) {
    list = list || [];
    return list.sort(() => Math.random() - 0.5);
  }
  resetQuiz() {
    this.quizResultStep = false;
    this.userDetailsStep = true;
    this.currentIndex = 0;
    // this.singleQuestion = ;
    this.answersList = [];
    this.lastScore = 0;
    this.lastScoreGrade = '';
    this.questions = [];
  }
  answerPressed(e: any,answer: any, answerIndex: any) {
    const btns = this.el.nativeElement.querySelectorAll('.btn-answer');
    btns.forEach((btn: any) => {
      if(btn.classList.contains('selected-answer')) {
        btn.classList.remove('selected-answer');
      }
    });
    this.answerBtnPress = true;
    e.target.classList.add('selected-answer');
    this.answersList[this.currentIndex].isCorrect = answer.isAnswer;
    this.answersList[this.currentIndex].pressedAnswer = answerIndex;
    console.log(this.answersList);
  }
  nextQuestion() {
    this.answerBtnPress = false;
    this.currentIndex++;
    if((this.questions.length - 1) >= this.currentIndex) {
      this.setQuestion(this.currentIndex);
    } else {
      this.quizStep = false;
      this.quizResultStep = true;
      this.currentIndex = 0;
      this.calcScore();
    }
  }
  get getProgress() {
    return (this.currentIndex * 100) / (this.questions.length - 1);  
  }
  calcScore() {
    let correctAnswers = 0;
    this.answersList.forEach(answer => {
      if(answer.isCorrect) {
        correctAnswers++ 
      }
    });
    this.lastScore = (correctAnswers*100)/this.questions.length;
    if(this.lastScore <= 40) {
      this.lastScoreGrade = "FAIL! Try Again!";
    } else if(this.lastScore > 40 && this.lastScore <= 70) {
      this.lastScoreGrade = "FAIL! Almost There!!";
    } else {
      this.lastScoreGrade = "Excellent! You Passed!";
    }
  }
  retry() {
    this.quizResultStep = false;
    this.quizStep = true;
  }
}

