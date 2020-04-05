import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question";
import QuestionData from "./QuestionData.json";
import ScoreCard from "./components/ScoreCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: QuestionData,
      questionIndex: 0,
      questionCount: QuestionData.length,
    };

    this.didSelectOption = this.didSelectOption.bind(this);
  }
  didSelectOption(event) {
    const newQuestions = this.state.questions;
    newQuestions[this.state.questionIndex].userAnswer = event.target.value;
    this.setState({
      questions: newQuestions,
      questionIndex: this.state.questionIndex + 1,
    });
  }

  calculateScore() {
    let correct = 0;
    for (const question of this.state.questions) {
      console.log(question.userAnswer, question.correctAnswer);
      if (question.userAnswer === question.correctAnswer) {
        correct += 1;
      }
    }
    return correct / this.state.questionCount;
  }

  render() {
    if (this.state.questionIndex === this.state.questionCount) {
      return <ScoreCard score={this.calculateScore()}></ScoreCard>;
    } else {
      const question = this.state.questions[this.state.questionIndex];
      return (
        <Question
          content={question.content}
          options={question.options}
          index={question.index}
          delegate={this.didSelectOption}
        ></Question>
      );
    }
  }
}

export default App;
