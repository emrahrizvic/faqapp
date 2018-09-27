import { Injectable } from '@angular/core';

import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];

  constructor() {
    /*
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Emrah',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is blue',
        hide: true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is JavaScript',
        hide: true
      },
    ];
    */
  }

  // get questions from LS
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // add question to LS
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];

      // push new question
      questions.unshift(question);

      // set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));

      // add new question
      questions.unshift(question);

      // re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // delete question from LS
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
