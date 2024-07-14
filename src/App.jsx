import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import WelcomePage from './components/WelcomePage';
import SignUpForm from './components/SignUpform';
import SignInForm from './components/SignInform';

import { Experience } from './components/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route 
          path="/Avatar" 
          element={
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
              <color attach="background" args={["#ececec"]} />
              <Experience />
            </Canvas>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
