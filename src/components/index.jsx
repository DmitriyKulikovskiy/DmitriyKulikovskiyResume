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
          <Routes basename="/DmitriyKulikovskiyResume/"> 
            <Route exact path="/DmitriyKulikovskiyResume/" element={<Homepage setTheme={setTheme} theme={theme}/>} />
            <Route path="/DmitriyKulikovskiyResume/about" element={<About />} />
            <Route path="/DmitriyKulikovskiyResume/resume" element={<Resume />} />
            <Route path="/DmitriyKulikovskiyResume/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App;