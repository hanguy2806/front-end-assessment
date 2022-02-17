import Header from "../header/Header";
import SurveyList from "../survey/SurveyList";

function Home() {
  return (
    <div className="App">
      <Header name="Surveys" />
      <SurveyList />
    </div>
  );
}

export default Home;
