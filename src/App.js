import { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Introduction from "./components/Introduction.js";
import Hello from "./components/Hello";
import {PopUpContext} from "./context/NameContext";
import Test from "./components/Test";
import Nav from "./components/Nav";

function App() {
  const [isOpen,setIsOpen]=useContext(PopUpContext)
  return (
    
      <div className="App">
        <Nav />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Introduction />} exact />
            <Route path="/hello" element={<Hello />} />
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </header>
        {isOpen && <Hello/>}
      </div>
    
  );
}

export default App;
