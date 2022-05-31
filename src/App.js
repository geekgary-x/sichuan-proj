import React from "react";
import { createRoot } from 'react-dom/client';
import Split from "react-split"
import "./styles/main.css"


function App() {
      return (
          <main>
               <Split sizes={[30, 70]} 
                direction="horizontal" 
                className="split">
                  <div className="sideBar">aaa1</div>
                  <div>aaa3</div>
              </Split>
          </main>
      );  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);