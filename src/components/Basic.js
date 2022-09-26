import React from "react";
import '../styles/Basic.css';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
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
  let src = "https://github.com/JeongMyeonghoon1105/Images/blob/main/profile1.jpeg?raw=true";

  if (mode === 'About') {
    content = <About/>
  } else if (mode === 'Projects') {
    content = <Projects/>
  } else {
    content = <Blog/>
    src = "https://github.com/JeongMyeonghoon1105/Images/blob/main/IMG_0366.jpeg?raw=true";
  }

  return (
    <div style={{ margin: "0", width: "100vw", display: "flex" }}>
      <div style={{ width: "300px" }}>
        <ProSidebar className={"side-bar"}>
          <div className={"side-bar-inner"} style={{ width: "300px" }}>
            <SidebarHeader className={"image"}>
              <img src={src} alt="profile" className={ "profile" }></img>
            </SidebarHeader>
            <Menu iconShape="square" style={{ margin: "0px 50px" }}>
              <MenuItem className={"accent"} onClick={() => { setMode('About'); }}>About</MenuItem>
              <MenuItem className={"accent"} onClick={() => { setMode('Projects'); }}>Projects</MenuItem>
              <MenuItem className={"accent"} onClick={() => { setMode('Blog'); }}>Tech Blog</MenuItem>
            </Menu>
          </div>
        </ProSidebar>
      </div>
      <div style={{ width: "70vw", height: "100vh", position: "relative" }}>
        {content}
      </div>
    </div>
  )
}

export default Basic;