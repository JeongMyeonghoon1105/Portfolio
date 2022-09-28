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
  // const [mode, setMode] = useState('About');
  // let content = null;
  let src = "https://github.com/JeongMyeonghoon1105/Images/blob/main/profile1.jpeg?raw=true";

  document.addEventListener('scroll', (event) => {
    let about = document.getElementById("about-container").scrollHeight;
    let projects = document.getElementById("projects-container").scrollHeight;
    console.log(projects)
    
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
    // let first = document.getElementById("about-container").clientHeight;
    // let second = document.getElementById("projects-container").clientHeight;

    // if (window.scrollY > first + second) {
    //   console.log('project-section');
    // } else if (window.scrollY > first) {
    //   console.log('blog-section')
    // }
  });

  // if (mode === 'About') {
  //   content = <About/>
  // } else if (mode === 'Projects') {
  //   content = <Projects/>
  // } else {
  //   content = <Blog/>
  //   src = "https://github.com/JeongMyeonghoon1105/Images/blob/main/IMG_0366.jpeg?raw=true";
  // }

  return (
    <div style={{ margin: "0", width: "100vw", display: "flex" }}>
      <div style={{ width: "300px" }}>
        <ProSidebar className={"side-bar"}>
          <div className={"side-bar-inner"} style={{ width: "300px" }}>
            <SidebarHeader className={"image"}>
              <img src={src} alt="profile" className={ "profile" }></img>
            </SidebarHeader>
            {/* <div style={{ width: "200px", height: "20px",  margin: "10px 50px" }} className={ "accent" }>
              hello
            </div> */}
            <Menu iconShape="square" style={{ margin: "0px 50px" }}>
              <MenuItem className={"accent"} id={"about-tab"}>About</MenuItem>
              <MenuItem className={"accent"} id={"projects-tab"}>Projects</MenuItem>
              <MenuItem className={"accent"} id={"blog-tab"}>Tech Blog</MenuItem>
            </Menu>
          </div>
        </ProSidebar>
      </div>
      <div style={{ display: "block", width: "100%", position: "absolute", "margin-left": "300px" }}>
        <div style={{ width: "70vw", height: "100vh", position: "relative" }}>
          <About/>
        </div>
        <Projects/>
        <Blog/>
      </div>
    </div>
  )
}

export default Basic;