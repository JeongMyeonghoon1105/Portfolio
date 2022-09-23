import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// npm install react-pro-sidebar
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <ProSidebar>
      <Menu iconShape="square">
        <SubMenu title="Portfolio">
          Hello World
          <MenuItem>Introductions</MenuItem>
          <MenuItem>Projects</MenuItem>
        </SubMenu>
        <MenuItem>Blog</MenuItem>
      </Menu>
    </ProSidebar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
