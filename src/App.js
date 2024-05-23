import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/page/homePage";
function App() {
 
  return (
    
    <Router>
    <div className="App">

   <Header />
   <HomePage />
    </div>
    </Router>
  );
}

export default App;
