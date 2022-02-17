import { Routes, Route } from "react-router-dom";
import SurveyDetails from "./components/survey/SurveyDetails";
import Home from "./components/home";
import { SurveyProvider } from "./context/SurveyContext";

function App() {
  return (
    <SurveyProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/survey/:name" element={<SurveyDetails />} />
        </Routes>
      </div>
    </SurveyProvider>
  );
}

export default App;
