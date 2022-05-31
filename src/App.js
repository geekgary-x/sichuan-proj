import React from "react";
import { createRoot } from 'react-dom/client';
import Split from "react-split"
import SideBar from "./components/SideBar";
import Viewport from "./components/Viewport";
import MenuHeader from "./components/Menuheader";
import DataList from "./components/DataList"

import "./styles/main.css"
import "cesium/Widgets/widgets.css";

function App() {
    const [on, setOn] = React.useState(0);
    const lightSwitch = (i) => setOn(on => i);

    function handleClick(i) {
        lightSwitch(i);
        console.log(i);
    }

    console.log("rrr");

    return (
        <main>
            <MenuHeader></MenuHeader>
            <Split sizes={[20, 80]}
                direction="horizontal"
                className="split">
                <DataList handleClick={key=>{handleClick(key)}}></DataList>
                <Viewport className="viewport" tttt={on}></Viewport>
            </Split>
        </main>
    );
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);