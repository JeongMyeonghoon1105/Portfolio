import React from "react";
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import './App.css';
import {useState} from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  // SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";

function Basic() {
  const [mode, setMode] = useState('About');
  let content = null;

  if (mode === 'About') {
    content = <About/>
  } else if (mode === 'Projects') {
    content = <Projects/>
  } else {
    content = <Blog/>
  }

  return (
    <div style={{ margin: "0", width: "100vw", display: "flex" }}>
      <ProSidebar className={"side-bar"}>
        <div className={"side-bar-inner"} style={{ width: "300px" }}>
          <SidebarHeader className={"image"}>
            <img src="https://github.com/JeongMyeonghoon1105/Images/blob/main/profile1.jpeg?raw=true" alt="profile" style={{ width: "100%", height: "100%" }}></img>
          </SidebarHeader>
          <Menu iconShape="square" style={{ margin: "0px 50px" }}>
            <MenuItem className={"accent"} onClick={() => { setMode('About'); }}>About</MenuItem>
            <MenuItem className={"accent"} onClick={() => { setMode('Projects'); }}>Projects</MenuItem>
            <MenuItem className={"accent"} onClick={() => { setMode('Blog'); }}>Tech Blog</MenuItem>
          </Menu>
        </div>
      </ProSidebar>
      {content}
    </div>
  )
}

export default Basic;