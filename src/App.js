
import "./App.css";
import Home from "./component/home/Home";
import {Login} from "./component/Login";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"


function App() {

  return (<>
 
    <Routes>
      <Route path="/" element={<Login />} exact >   </Route>
      <Route path="/home" element={<Home /> } > </Route>
    </Routes>

    

  </>
    );
}

export default App;