import { useEffect, useState } from "react";
import data from "../../data/config.json";
import "./surveyList.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SurveyContext } from "../../context/SurveyContext";

function SurveyList() {
  const navigate = useNavigate();
  const [state, setState] = useContext(SurveyContext);
  const [surveys, setSurveys] = useState();

  const handleOnClick = (item) => {
    setState(item);
    navigate(`survey/${item.name}`);
  };
  useEffect(() => {
      console.log("data; ",Object.values(data) )
    setSurveys(Object.values(data));
  }, []);
  return (
    <div className="App">
      {surveys?.map((item) => (
        <div className="container" key={item.name}>
          {item.name}
          <span className="arrowButton" onClick={() => handleOnClick(item)}>
            &gt;
          </span>
        </div>
      ))}
    </div>
  );
}

export default SurveyList;
