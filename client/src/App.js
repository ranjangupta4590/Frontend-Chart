import React from "react";
import './App.css';
import Dashboard from './component/Dashboard';
import Signin from "./component/Signin";
function App({ children }) {

  return (
    <div className=' mx-10 my-10'>
       <Dashboard/> 
     {/* <Signin/> */}
    </div> 
  );
}

export default App;
