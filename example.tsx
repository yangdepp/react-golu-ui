import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import ScrollExample from './lib/scroll/scroll.example';
import { Footer, Header, Content, Sider, Layout } from './lib/layout/layout';
import './example.scss';

const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <img src={logo} alt="GOLU" className="header-logo" />
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
            <li>
              <NavLink to="/form">表单Form</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">滚动条</NavLink>
            </li>
          </ul>
        </Sider>
        <Content className="site-content">
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/scroll" component={ScrollExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; yangdepp</Footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
