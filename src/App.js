import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/contactus/ContactUs";
import Services from "./Pages/Services/Services";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="maincontent"></div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
