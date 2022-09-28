import React from "react";
import '../styles/Basic.css';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
// import {useState} from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  // SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";

function Basic() {
  let src = "https://github.com/JeongMyeonghoon1105/Images/blob/main/profile1.jpeg?raw=true";

  document.addEventListener('scroll', (event) => {
    let about = document.getElementById("about-container").scrollHeight;
    let projects = document.getElementById("projects-container").scrollHeight;
    
    if (window.scrollY > projects) {
      document.getElementById("about-tab").style.color="white";
      document.getElementById("projects-tab").style.color="white";
      document.getElementById("blog-tab").style.color="gray";
    } else if (window.scrollY > about) {
      document.getElementById("about-tab").style.color="white";
      document.getElementById("projects-tab").style.color="gray";
      document.getElementById("blog-tab").style.color="white";
    } else {
      document.getElementById("about-tab").style.color="gray";
      document.getElementById("projects-tab").style.color="white";
      document.getElementById("blog-tab").style.color="white";
    }
  });

  return (
    <div style={{ margin: "0", width: "100vw", display: "flex" }}>
      <div style={{ width: "300px" }}>
        <ProSidebar className={"side-bar"}>
          <div className={"side-bar-inner"} style={{ width: "300px" }}>
            <SidebarHeader className={"image"}>
              <img src={src} alt="profile" className={ "profile" }></img>
            </SidebarHeader>
            <Menu iconShape="square" style={{ margin: "0px 50px" }}>
              <div className={"accent"} id={"about-tab"} onClick={() => { document.getElementById("about-top").scrollIntoView({behavior: "smooth"}) }}>About</div>
              <div className={"accent"} id={"projects-tab"} onClick={() => { document.getElementById("projects-top").scrollIntoView({behavior: "smooth"}) }}>Projects</div>
              <div className={"accent"} id={"blog-tab"} onClick={() => { document.getElementById("blog-container").scrollIntoView({behavior: "smooth"}) }}>Tech Blog</div>
            </Menu>
          </div>
        </ProSidebar>
      </div>
      <div id={ "about-top" } style={{ display: "block", width: "100vw", "margin-left": "200px" }}>
        <div style={{ width: "70vw", height: "100vh" }}>
          <About/>
        </div>
        <div style={{ width: "100%", height: "0px", border: "none" }} id={ "projects-top" }></div>
        <Projects/>
        <Blog/>
      </div>
    </div>
  )
}

export default Basic;