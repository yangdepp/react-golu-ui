import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Layout from './layout';
import Sider from './sider';

export default function() {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout className="hi" style={{height: 500}}>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
