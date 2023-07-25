import "./App.scss";
import Header from './components/Header';
import Tabs from './components/Tabs';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import RecipeLists from './components/RecipeLists';
import { useState } from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [loader,setLoader]=useState(true);
  return (
    <Router>
           <div className="main">
        <Header/>
        <Tabs setLoader={setLoader}/>
        <RecipeLists setLoader={setLoader}/>
        {loader && <div className="loader">
          <div className="spinner"></div>
          </div>}
    </div>
    <Routes>
      <Route path="/recipe" element={<RecipeCard/>}/>
    </Routes>
    </Router>

  );
}

export default App;
