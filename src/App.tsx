import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import IndustryAssociations from "./Pages/IndustryAssociations";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="/industryassociations"
            element={<IndustryAssociations />}
          ></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/partners" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
