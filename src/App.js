import React from "react";
import { createRoot } from 'react-dom/client';
import Split from "react-split"
import SideBar from "./components/SideBar";
import Viewport from "./components/Viewport";
import MenuHeader from "./components/Menuheader";
import DataList from "./components/DataList"

import "./styles/main.css"
import "cesium/Widgets/widgets.css";
import listdata from "./model/listdata";


import { mode } from "cesium";

function App() {

    // model
    const [on, setOn] = React.useState(0);
    const lightSwitch = (i) => setOn(on => i);

    const [model, setModel] = React.useState([
        "/SampleData/Cesium3DTiles/Batched/BatchedColors/tileset.json",
    ]);

    // control
    function handleClick(i) {
        console.log(`car ${i} click!`);
        setModel(listdata[i].model);
        console.log(model);
        lightSwitch(i);
    }

    
    // view
    function renderViewport()
    {
        console.log("viewport render");
        console.log(model);
        return  <Viewport className="viewport" tttt={on} model={model}></Viewport>
    }

    return (
        <main>
            <MenuHeader></MenuHeader>
            <Split sizes={[20, 80]}
                direction="horizontal"
                className="split">
                <DataList handleClick={key=>{handleClick(key)}} data={listdata}></DataList>
                {renderViewport()}
            </Split>
        </main>
    );
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);