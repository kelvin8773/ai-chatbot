import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Javascript", handler: props.actionProvider.handleJavascript, id: 1 },
    { text: "Data visualization", handler: () => {props.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, createChatBotMessage("Display all data visualization resource...")]
    }))}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
