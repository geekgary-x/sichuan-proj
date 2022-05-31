import React from "react";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './Menuheader.css'
export default function Example() {
    return (
        <header class="site-header">
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">Open menu</MenuButton>} transition>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </Menu>
        </header>
    );
}