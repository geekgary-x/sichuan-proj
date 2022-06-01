import axios from "axios";
import React from "react";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './Menuheader.css'
export default function MenuHeader(props) {
    function testdownload() {
        axios
            .get(`/imgs/1.png`, {
                responseType: "blob",
            })
            .then((res) => {
                let url = URL.createObjectURL(res.data);
                var a = document.createElement("a");
                a.href = url; // 给a标签赋上下载地址
                a.download = `${name}`;
                a.style.display = "none"; // 让a标签不显示
                a.click(); // a标签自点击
                URL.revokeObjectURL(a.href);
            })
            .catch((_) => { });

    }

    return (
        <header className="site-header">
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">File</MenuButton>} transition>
                <MenuItem>New File</MenuItem>
                <MenuItem onClick={testdownload}>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">Edit</MenuButton>} transition>
                <MenuItem>Add Label</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">View</MenuButton>} transition>
                <MenuItem onClick={props.handleclickHeader}>Focus</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">Help</MenuButton>} transition>
                <MenuItem>Document</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">About</MenuButton>} transition>
                <MenuItem>About</MenuItem>
            </Menu>
        </header>
    );
}