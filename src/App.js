import React from "react";
import { createRoot } from 'react-dom/client';
import Split from "react-split"
import SideBar from "./components/SideBar";
import Viewport from "./components/Viewport";
import MenuHeader from "./components/Menuheader";

import "./styles/main.css"
import "cesium/Widgets/widgets.css";

function App() {

    function handleClick(i)
    {
        console.log(i);
    }

      return (
          <main>
              <MenuHeader></MenuHeader>
               <Split sizes={[20, 80]} 
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