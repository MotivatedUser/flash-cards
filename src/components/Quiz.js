import React, { useState, useEffect } from "react";
import "../../src/App.css";

const Quiz = ({ quizData, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(180);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      const timerInterval = setInterval(() => {
        setTimer((t) => {
          if (t === 0) {
            clearInterval(timerInterval);
            onFinish(score);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [quizStarted, onFinish, score]);

  useEffect(() => {
    if (selectedOption === quizData[currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 10);
    }
  }, [currentQuestion, selectedOption, quizData]);

  const handleSubmit = () => {
    if (currentQuestion + 1 < quizData.length) {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish(score);
    }
  };

  return (
    <div className="quiz">
      {!quizStarted ? (
        <div className="start-quiz">
          <button className="quiz-button" onClick={() => setQuizStarted(true)}>Start Quiz</button>
        </div>
      ) : (
        <>
          <div className="quiz-timer">Time Remaining: {timer} seconds</div>
          <div className="quiz-question">
            <h3>{quizData[currentQuestion].question}</h3>
            <div className="quiz-options">
              {quizData[currentQuestion].options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => setSelectedOption(index)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button className="quiz-button sticky-button" onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
