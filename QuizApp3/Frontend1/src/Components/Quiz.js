import React, { useEffect, useState } from 'react';
import QuizResult from './QuizResult';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function Quiz() {
  const url = "http://localhost:8080/Question";
  const url1= "http://localhost:8080/result/update";
  const url2= "http://localhost:8080/result";
  const location = useLocation();
  const passedData = location.state.data;
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  

  

  const changeQuestion = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); 
    } else {
      setShowResult(true);
    }
  }
  const handleUpdateResult = () =>{
    const submit = async e => {
      e.preventDefault();

      const {data} = await axios.post(url1, {
        score
      }, {withCredentials: true});

      axios.defaults.headers.common['Authorization'] = `Bearer ${passedData}`;
      
  }}

  const updateScore = () => {
    const selectedOptionInt = parseInt(selectedOption); 
    if (selectedOptionInt === data[currentQuestion].answer) {
      setScore(score + 1);
    }
  }


  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
  }

  useEffect(() => {
    axios.get(url2,{headers: { Authorization: `Bearer ${passedData}` }}).then((res) => {
      console.log(res.data);
      setData(res.data);
    })
  }, [])

  return (
    (data.length > 0 ? (
      <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
          {showResult ? (
            <QuizResult score={score} totalScore={data.length} tryAgain={resetAll} />
          ) : (
            <>
              <div className="question">
                <span id="question-number">{currentQuestion + 1}. </span>
                <span id="question-txt">{data[currentQuestion].title}</span>
              </div>
              <div className="option-container">
                {Array.from({ length: 4 }, (_, index) => {
                  const option = data[currentQuestion][`option${index + 1}`];
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        value={option}
                        checked={selectedOption === index + 1}
                        onChange={() => setSelectedOption(index + 1 )}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
              <input type="button" value="Next" id="next-button" onClick={()=>{changeQuestion()
              updateScore()} }/>
            </>
          )}
        </div>
      </div>
    ) : <p>loading</p>)
  );
}

export default Quiz;