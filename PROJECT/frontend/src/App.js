import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from "./components/nutrition-components/Counter";
import Breakfast from "./components/nutrition-components/Breakfirst";
import Lunch from "./components/nutrition-components/Lunch";
import Dinner from "./components/nutrition-components/Dinner";
import AddNewBreakfast from "./components/nutrition-components/AddNewBreakfast";
import AddNewLunch from "./components/nutrition-components/AddNewLunch";
import AddNewDinner from "./components/nutrition-components/AddNewDinner";
import AnalysisBreak from "./components/nutrition-components/AnalysisBreak";
import AnalysisLunch from "./components/nutrition-components/AnalysisLunch";
import AnalysisDinner from "./components/nutrition-components/AnalysisDinner";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
      <Routes>
      <Route exact path="/" element={<Counter/>} />
      <Route exact path="/breakfast" element={<Breakfast />}></Route>
      <Route exact path="/breakfast/addnewdiary" element={<AddNewBreakfast />} ></Route>
      <Route exact path="/breakfast/viewanalysis" element={<AnalysisBreak />} ></Route>
      <Route exact path="/lunch" element={<Lunch />}></Route>
      <Route exact path="/lunch/addnewdiary" element={<AddNewLunch />}></Route>
      <Route exact path="/lunch/viewanalysis" element={<AnalysisLunch />} ></Route>
      <Route exact path="/dinner" element={<Dinner />}></Route>
      <Route exact path="/dinner/addnewdiary" element={<AddNewDinner />} ></Route>
      <Route exact path="/dinner/viewanalysis" element={<AnalysisDinner />} ></Route>
    </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
