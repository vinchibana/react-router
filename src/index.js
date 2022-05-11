import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import About from "./pages/About";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)