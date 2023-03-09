import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Navbarr from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


// function App() {
//   return (
//     <>
//           <Header />
//           <Navbarr />
//           <div className="container">
//             <Routes>
//               <Route path="/" element={<About />} />
//               <Route path="/portfolio" element={<Portfolio />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/resume" element={<Resume />} />
//             </Routes>
//           </div>
//     </>
//   );
// }

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = About
      break
    case "/portfolio":
      Component = Portfolio
      break
    case "/about":
      Component = About
      break
    case "/contact":
        Component = Contact
        break
    case "/resume":
        Component = Resume
        break
  }
      return (
        <>
          <Header />
          <Navbarr /> 
          <Component />
          <Footer />        
    </>
  );
}

export default App;