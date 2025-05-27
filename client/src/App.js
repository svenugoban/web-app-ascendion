
import React, { Suspense, lazy,  } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

// Lazy-loaded components
const NavBar = lazy(() => import("./components/pages/navBar/navBar"));

const App = () => {
  return (
  
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>        
            <Route path="/" element={<NavBar />} />             
          </Routes>
        </Suspense>
      </Router>
    
  );
};

export default App;
