import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Error from "./404/Error";
import Home from "./Home/Home";
import './main.sass'
function App() {
  return (
    <div className="main-container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter></div>
  );
}
export default App;