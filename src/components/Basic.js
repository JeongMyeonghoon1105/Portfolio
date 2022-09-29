import React from "react";
import '../styles/Basic.css';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Experience from './Experience';
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
    let experience = document.getElementById("experience-container").scrollHeight + about;
    let projects = document.getElementById("projects-container").scrollHeight + experience;
    
    if (window.scrollY > projects) {
      document.getElementById("about-tab").style.color="white";
      document.getElementById("experience-tab").style.color="white";
      document.getElementById("projects-tab").style.color="white";
      document.getElementById("blog-tab").style.color="gray";
    } else if (window.scrollY > experience) {
      document.getElementById("about-tab").style.color="white";
      document.getElementById("experience-tab").style.color="white";
      document.getElementById("projects-tab").style.color="gray";
      document.getElementById("blog-tab").style.color="white";
    } else if (window.scrollY > about) {
      document.getElementById("about-tab").style.color="white";
      document.getElementById("experience-tab").style.color="gray";
      document.getElementById("projects-tab").style.color="white";
      document.getElementById("blog-tab").style.color="white";
    } else {
      document.getElementById("about-tab").style.color="gray";
      document.getElementById("experience-tab").style.color="white";
      document.getElementById("projects-tab").style.color="white";
      document.getElementById("blog-tab").style.color="white";
    }
  });

  return (
    <div style={{ margin: "0", width: "100vw", display: "flex", "overflow-x": "hidden" }}>
      <ProSidebar className={"side-bar"}>
        <div className={"side-bar-inner"} style={{ width: "300px", height: "100vh" }}>
          <SidebarHeader className={"image"}>
            <img src={src} alt="profile" className={ "profile" }></img>
          </SidebarHeader>
          <Menu iconShape="square" style={{ margin: "0px 50px" }}>
            <div className={"accent"} id={"about-tab"} onClick={() => { document.getElementById("about-top").scrollIntoView({behavior: "smooth"}) }}>ABOUT</div>
            <div className={"accent"} id={"experience-tab"} onClick={() => { document.getElementById("experience-top").scrollIntoView({behavior: "smooth"}) }}>DETAILS</div>
            <div className={"accent"} id={"projects-tab"} onClick={() => { document.getElementById("projects-top").scrollIntoView({behavior: "smooth"}) }}>PROJECTS</div>
            <div className={"accent"} id={"blog-tab"} onClick={() => { document.getElementById("blog-container").scrollIntoView({behavior: "smooth"}) }}>TECH BLOG</div>
          </Menu>
        </div>
      </ProSidebar>
      <div id={ "about-top" } style={{ display: "block", width: "100%", "margin-left": "300px", "overflow-x": "hidden" }}>
        <div style={{ width: "100%", height: "100vh" }}>
          <About/>
        </div>
        <div className={ "line" } id={ "experience-top" }></div>
        <Experience/>
        <div className={ "line" } id={ "projects-top" }></div>
        <Projects/>
        <div className={ "line" }></div>
        <Blog/>
      </div>
    </div>
  )
}

export default Basic;