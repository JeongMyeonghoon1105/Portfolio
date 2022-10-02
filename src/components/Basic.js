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
    let tabs = [
      document.getElementById("about-tab"),
      document.getElementById("experience-tab"),
      document.getElementById("projects-tab"),
      document.getElementById("blog-tab")
    ]

    function activeTab(i) {
      tabs.forEach((elem, index, arr) => {
        if (i === index) {
          arr[index].style.color="white";
        } else {
          arr[index].style.color="gray";
        }
      })
    }
    
    if (window.scrollY > projects) {
      activeTab(3);
    } else if (window.scrollY > experience) {
      activeTab(2);
    } else if (window.scrollY > about) {
      activeTab(1);
    } else {
      activeTab(0);
    }
  });

  function scrollToTab(direction) {
    document.getElementById(direction).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={ "wrap" }>
      <ProSidebar className={"side-bar"}>
        <div className={"side-bar-inner"}>
          <SidebarHeader className={"image"}>
            <img src={src} alt="profile" className={ "profile" }></img>
          </SidebarHeader>
          <Menu iconShape="square" style={{ margin: "0px 50px" }}>
            <div className={"accent"} id={"about-tab"} onClick={() => { scrollToTab("about-top") }}>ABOUT</div>
            <div className={"accent"} id={"experience-tab"} onClick={() => { scrollToTab("experience-top") }}>DETAILS</div>
            <div className={"accent"} id={"projects-tab"} onClick={() => { scrollToTab("projects-top") }}>PROJECTS</div>
            <div className={"accent"} id={"blog-tab"} onClick={() => { scrollToTab("blog-container") }}>TECH BLOG</div>
          </Menu>
        </div>
      </ProSidebar>
      <div id={ "about-top" }>
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