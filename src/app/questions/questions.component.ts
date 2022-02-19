import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {QuizQuestionListDB} from '../shared/data/question-list'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, MatCardModule, MatButtonModule ,MatButtonToggleModule{
  public selectedAnswer: string;
  public selectedAnswers: string[];
  selectedAns: [string];
  quizQuestions = [];
  currentQindex = 0;
  currentQ = ""
  currentA =[""]
  currentQmulti = false;
  finalAnswers = [[]];
  disableNext = true;
  constructor() { 
    this.quizQuestions = QuizQuestionListDB.QuizQuestionList
    this.currentQ = this.quizQuestions[0].quest
    this.currentA = this.quizQuestions[0].answer
    this.currentQmulti = this.quizQuestions[0].multi
    console.log(this.currentA)
  }
  questionCycle(e,increment){
    if(increment==1&&this.selectedAns){
      this.finalAnswers[this.currentQindex]=this.selectedAns
    }
    this.currentQindex += increment;
    this.disableNext = this.finalAnswers[this.currentQindex] === undefined;
    this.currentQ = this.quizQuestions[this.currentQindex].quest;
    this.currentA = this.quizQuestions[this.currentQindex].answer;
    this.currentQmulti = this.quizQuestions[this.currentQindex].multi;
    if(this.finalAnswers[this.currentQindex] && this.currentQmulti){
      this.selectedAnswers=this.finalAnswers[this.currentQindex]
    } else if(this.finalAnswers[this.currentQindex] && !this.currentQmulti){
      this.selectedAnswer=this.finalAnswers[this.currentQindex][0]
    }
    this.selectedAns=undefined;

  }
  public onValChange(val: string) {
    this.selectedAns = [val];
    this.disableNext = this.selectedAns === undefined;
  }
  public onValChangeMult(val: [string]) {
    this.selectedAns = val;
    this.disableNext = this.selectedAns === undefined;
  }
  public submit(e){
    console.log("SUBMIT")
  }
  ngOnInit(): void {
    this.selectedAnswer = ""
  }

}
