import { React} from "react";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"

import Search from "./Components/Search";
import Posts from "./Components/posts";
// import Search from "./Components/Search";
import Static from "./Components/Static";

// import "./App.css";

function App() {


  return (
    <div className="mai">
      {/* <BrowserRouter> */}
      {/* <Static/> */}
      {/* <Posts/> */}
    {/* <Search/> */}
    {/* </BrowserRouter> */}
    <Router>
      <Routes>
        <Route exact path='/' element={<Search></Search>}></Route>
        <Route exact path='/posts' element={<Posts></Posts>}></Route>
        <Route exact path='/Static' element={<Static></Static>}></Route>
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;

 