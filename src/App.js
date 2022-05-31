import React from "react";
import { createRoot } from 'react-dom/client';
import Split from "react-split"
import SideBar from "./components/SideBar";
import Viewport from "./components/Viewport";
import Example from "./components/Menuheader";

import "./styles/main.css"
import "cesium/Widgets/widgets.css";

function App() {
      return (
          <main>
              <Example></Example>
               <Split sizes={[30, 70]} 
                direction="horizontal" 
                className="split">
                  <SideBar className="sideBar"></SideBar>
                  <Viewport className="viewport"></Viewport>
              </Split>
          </main>
      );  
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);