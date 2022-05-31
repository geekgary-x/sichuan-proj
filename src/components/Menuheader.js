import React from "react";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './Menuheader.css'
export default function MenuHeader() {
    return (
        <header className="site-header">
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">File</MenuButton>} transition>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">Edit</MenuButton>} transition>
                <MenuItem>Add Label</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">View</MenuButton>} transition>
                <MenuItem>Add Label</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">Help</MenuButton>} transition>
                <MenuItem>Document</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">About</MenuButton>} transition>
                <MenuItem>Cesium</MenuItem>
                <MenuItem>React</MenuItem>
            </Menu>
        </header>
    );
}