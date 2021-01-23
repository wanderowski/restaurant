import React, {useState, useEffect} from 'react'
import { Layout, Menu, Button} from 'antd';
import {
  CoffeeOutlined,
  VideoCameraOutlined,
  FormOutlined
} from '@ant-design/icons';
import { Route, Link } from 'react-router-dom'
import Kitchen from '../Kitchen';
import Restaurant from '../Restaurant';
import Reviews from '../Reviews'
import LogoutButton from '../../components/logoutbutton'
import isAdmin  from '../../validation/isAdmin'
import '../../common.css'


const { Header, Sider, Content } = Layout;




function Dashboard() {
  const role = localStorage['role']
  const [showDashboard, setShowDashboard] = useState('flex')
  useEffect(() => {
    isAdmin(role) ? setShowDashboard('none') : setShowDashboard('flex')
  }, [role])

  const forbiddenStyles = {
    width: '100vw', 
    height: '100%', 
    zIndex: 100000, 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    display: showDashboard, 
    backgroundColor: 'rgba(255,255,255,0.5)', 
    backdropFilter: 'blur(15px)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'


  }
  

  return (
      <div>
        <div style={forbiddenStyles}>
          <h2 style={{fontSize: 36}}>У вас нет доступа к этой странице!</h2>
          <p style={{fontSize: 18}}>Пожалуйста, вернитесь на <Link to="/">Главную Страницу</Link></p>
        </div>
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
              <Menu.Item key="3" icon={<FormOutlined />}>
                <Link to="/dashboard/reviews">Reviews</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ height: 'auto', width: '100%', padding: '10px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>  
              <div className="container">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                  <Button onClick={() => {window.location.href='/'}} style={{marginRight: 20}} type="primary">Main</Button>
                  <LogoutButton />
                </div>
                
              </div>
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
            <Route exact path="/dashboard/reviews" component={Reviews} />
            </Content>
          </Layout>
        </Layout>

      </div>
      

        
      );
}


export default Dashboard