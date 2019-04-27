import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example1";
import LayoutExample from "./lib/layout/layout.example";
import { Footer, Header, Content, Sider, Layout } from "./lib/layout/layout";
import './example.scss';




const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <img src={logo} alt="GOLU" className="header-logo"/>
        <h1>GOLU</h1>
      </Header>
      <Layout>
        <Sider className="site-sider">
          <ul>
            <li>
              <NavLink to="/icon">图标Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">按钮Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">弹窗Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局Layout</NavLink>
            </li>
          </ul>
        </Sider>
        <Content>
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">@ yangdepp</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
