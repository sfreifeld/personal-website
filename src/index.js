import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import 'tailwindcss/tailwind.css';
import Contact from './Pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600&display=swap" rel="stylesheet"/>  
      </head>
      <div className="">
        <div className="">
          <Home />
        </div>
        <div className=""></div>
        <div>
          <Projects />
        </div>
        <div className="">
          <Contact />
        </div>
      </div>
  </React.StrictMode>
);

