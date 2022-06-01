import axios from "axios";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './Menuheader.css'

import aboutdata from '../model/about.data'
import helpdata from '../model/help.data'
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

    const notifyAbout = () => toast(aboutdata);
    const notifyHelp = () => toast(helpdata);

    return (
        <header className="site-header">
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">文件</MenuButton>} transition>
                <MenuItem>新建</MenuItem>
                <MenuItem onClick={testdownload}>保存</MenuItem>
                <MenuItem>关闭</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">编辑</MenuButton>} transition>
                <MenuItem>添加标签</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">视图</MenuButton>} transition>
                <MenuItem onClick={props.handleclickHeader}>聚焦目标</MenuItem>
            </Menu>
            <Menu className="MenuHeader" menuButton={<MenuButton className="menubutton">关于</MenuButton>} transition>
                <MenuItem onClick={notifyHelp}>帮助</MenuItem>
                <MenuItem onClick={notifyAbout}>关于</MenuItem>
            </Menu>
            <Toaster />
        </header>
    );
}