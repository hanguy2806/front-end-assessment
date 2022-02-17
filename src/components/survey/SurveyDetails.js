import { useContext, useEffect, useState } from "react";
import { SurveyContext } from "../../context/SurveyContext";
import Header from "../header/Header";
import Question from "../Question";
import "./surveyDetails.css";

function SurveyDetails() {
  const [state, setState] = useContext(SurveyContext);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(Object.values(state.questions));


  const handleNavigate = (direction) => {
    if(direction === "next"){
      setIndex(index === 4 ? index : index+1);
    }else{
      setIndex(index === 0 ? index : index-1);
    }
  }
  
  useEffect(() => {
    console.log("Staet is : ", );
    setQuestions(Object.values(state.questions));
  }, []);
  return (
    <div className="App">
      hello
      <Header name={state?.name} />
      <div>{state?.label}</div>
      {questions.map((item,i)=> i === index && <Question data={item} />)}
      <div>{index}</div>
      <a class="round"  onClick={() => handleNavigate("previous")}>&#8249;</a>
      <a class="round" onClick={() => handleNavigate("next")}>
        &#8250;
      </a>
    </div>
  );
}

export default SurveyDetails;
