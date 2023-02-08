import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from './homepage/homepage';
import About from './about/about';
import HeaderDesktop from "../utilities/headerDesktop";
import Resume from "./resume";
import Contact from "./contact";
import { useState } from "react";
import { module } from "../utils/common";

const App = () => {
    const [theme, setTheme] = useState(!module.getThemeValue());

    if (theme) {
      document.querySelector('body').classList.add('white-theme');
    } else {
      document.querySelector('body').classList.remove('white-theme');
    }

    return (
      <BrowserRouter>
        <div>
          <HeaderDesktop />
          <Routes>
            <Route exact path="/" element={<Homepage setTheme={setTheme} theme={theme}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App;