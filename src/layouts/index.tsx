import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'umi/link';
import styles from './index.css';
import Breakcrumbs from '@/component/Breakcrumbs.tsx';

const { Header, Content, Footer } = Layout;
const BasicLayout: React.FC = props => {
  return (
    <Layout className={`layout ${styles.wrppaerLayout}`}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">首页</Link>
           </Menu.Item>
          <Menu.Item key="2">

            <Link to="/list">列表</Link>
          </Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.wrapper}>

        <div style={{ margin: '16px 0' }}>
        <Breakcrumbs/>
        
        </div>
        <div className={styles.content}>
          <div className={styles.normal}>
             
            {props.children}
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  );
};

export default BasicLayout;
