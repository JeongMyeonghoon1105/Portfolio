import React from "react";
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import {useState} from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
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
      <ProSidebar
        style={{
          position: "absolute",
          width: "400px",
          "min-height": "100vh"
        }}>
        <SidebarHeader
          style={{
            width: "230px",
            height: "230px",
            margin: "85px",
            "border-radius": "230px",
            overflow: "hidden"
          }}>
          <img src="https://avatars.githubusercontent.com/u/89135740?v=4" alt="profile" style={{ width: "100%", height: "100%"}}></img>
        </SidebarHeader>
        <Menu iconShape="square" style={{ margin: "0px 50px" }}>
          <SubMenu
            title="Portfolio"
            style={{
              "font-size": "1.2rem"
            }}
            >
            <MenuItem
              onClick={() => {
                setMode('About');
              }}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={() => {
                setMode('Projects');
              }}
            >
              Projects
            </MenuItem>
          </SubMenu>
          <MenuItem
            style={{
              "font-size": "1.2rem"
            }}
            onClick={() => {
              setMode('Blog');
            }}
          >
            Tech Blog
          </MenuItem>
        </Menu>
      </ProSidebar>
      {content}
    </div>
  )
}

export default Basic;