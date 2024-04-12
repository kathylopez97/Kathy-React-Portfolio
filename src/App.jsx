import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./styles/banner.css";
import './index.css'
// import nav banner and door from main.jsx
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Footer from './components/Footer';


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
  
            <div className="bg-slate-900">
              <Navbar />
              <Banner/>
              <Footer/>
          </div>

        }
              </>
    );
  };
  
  export default App;
  