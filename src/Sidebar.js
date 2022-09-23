import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";

const Sidebar =  () => {
  return (
    <ProSidebar
      style={{
        position: "absolute",
        width: "400px",
        "min-height": "100vh"
      }}>
      <SidebarHeader
        style={{
          width: "300px",
          height: "300px",
          margin: "50px",
          "border-radius": "300px",
          overflow: "hidden"
        }}>
        <img src="https://avatars.githubusercontent.com/u/89135740?v=4" alt="profile" style={{ width: "100%", height: "100%"}}></img>
      </SidebarHeader>
      <Menu iconShape="square" style={{ margin: "0px 50px" }}>
        <SubMenu
          title="Portfolio"
          style={{
            "font-size": "1.2rem"
          }}>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
        </SubMenu>
        <MenuItem style={{
            "font-size": "1.2rem"
          }}>Blog</MenuItem>
      </Menu>
    </ProSidebar>
  )
}

export default Sidebar;