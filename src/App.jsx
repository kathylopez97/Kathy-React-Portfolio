import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import  "./styles/banner.css";
import "./index.css"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#lightblue"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
          :

          <Router>
            <div className="bg-slate-900">
              <Navbar />
              <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
              <Footer />
            </div>
          </Router>
      }
    </>
  );
};

export default App;





