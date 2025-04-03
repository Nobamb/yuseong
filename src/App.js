import Nav from "./Nav/Nav";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Program from "./Program/Program";
import Notice from "./Notice/Notice";
import Community from "./Community/Community";
import Join from "./Join/Join";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   console.log(scroll);
  // }, [scroll]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav isScrolled={scroll} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Program" element={<Program />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
