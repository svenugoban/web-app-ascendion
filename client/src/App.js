
import React, { Suspense, lazy,  } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


// Lazy-loaded components
const Calculator = lazy(() => import("./components/pages/calculator/calculator"));

const App = () => {
  return (
  
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>        
            <Route path="/calculate" element={<Calculator />} />            
          </Routes>
        </Suspense>
      </Router>
    
  );
};

export default App;
