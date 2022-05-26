import React from "react";
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Navbar";


import "./styles/main.css"


function App() {
      return (
          <app>
              <Navbar></Navbar>
          </app>
      );  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);