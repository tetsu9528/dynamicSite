import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/page/homePage";
import {NewsPage}  from "./components/page/newsPage";
function App() {
 
  return (
    
    <Router>
    <div className="App">

   <Header />   
  <HomePage />

   <Routes>
    <Route path="/HomePage" element={<HomePage />} />
    <Route path="/NewsPage" element={<NewsPage />} />
   </Routes>
        </div>
    </Router>
  );
}

export default App;
