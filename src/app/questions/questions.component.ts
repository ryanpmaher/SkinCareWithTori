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
  quizQuestions = [];
  currentQindex = 0;
  currentQ = ""
  currentA =[""]
  constructor() { 
    this.quizQuestions = QuizQuestionListDB.QuizQuestionList
    this.currentQ = this.quizQuestions[0].quest
    this.currentA = this.quizQuestions[0].answer
    console.log(this.currentA)
  }
  questionCycle(e,increment){
    this.currentQindex += increment;
    this.currentQ = this.quizQuestions[this.currentQindex].quest;
    this.currentA = this.quizQuestions[this.currentQindex].answer;
  }
  ngOnInit(): void {
  }

}
