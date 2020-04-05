import React from "react";

function Question(props) {
  return (
    <div className="card">
      <h2
        className="questionContent"
        style={{ font: "HelveticaNeue", color: "#474747" }}
      >
        {props.content}
      </h2>
      <form id={"group" + props.index} style={{ marginLeft: 40 }}>
        {props.options.map((option) => {
          return (
            <QuestionOption
              option={option}
              isSelected={option === props.userAnswer}
              onClick={props.delegate}
            ></QuestionOption>
          );
        })}
      </form>
      <p className="questionIndex">{"Question " + (props.index + 1)}</p>
    </div>
  );
}

function QuestionOption(props) {
  return (
    <div className="questionOption">
      <input
        type="radio"
        className="radioBtns"
        name="radioGroup"
        id={props.option}
        checked={props.isSelected}
        value={props.option}
        disabled={false}
        onClick={props.onClick}
      />
      <label htmlFor={props.option}>{props.option}</label>
    </div>
  );
}

export default Question;
