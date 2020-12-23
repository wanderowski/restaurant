import React from 'react'
import { Layout, Menu, Button } from 'antd';
import {
  CoffeeOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Route, Link } from 'react-router-dom'
import Kitchen from '../Kitchen';
import Restaurant from '../Restaurant';



const { Header, Sider, Content } = Layout;



function Dashboard({logoutHandler}) {
    return (
        <Layout style={{
          width: '100vw',
          height: '100vh'
        }}>
          <Sider trigger={null} collapsible>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<CoffeeOutlined />}>
                <Link to="/dashboard/restaurant">Restaurants</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/dashboard/kitchen">Kitchen</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
              {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })} */}
              <Button type="primary" danger onClick={logoutHandler}>Log Out</Button>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                padding: '24px 16px',
                minWidth: 280
              }}
            >
            <Route exact path="/dashboard/kitchen" component={Kitchen} />
            <Route exact path="/dashboard/restaurant" component={Restaurant} />
            </Content>
          </Layout>
        </Layout>
      );
}

export default Dashboard