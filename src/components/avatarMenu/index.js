import React from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import LogoutButton from '../logoutbutton'
import OrdersButton from '../ordersButton'
import { UserOutlined } from '@ant-design/icons'
import FavButton from '../favButton'
import './index.css'

function AvatarMenu(props) {



    const menu = (
        <Menu>
          <Menu.Item>
            <OrdersButton />
          </Menu.Item>
          <Menu.Item>
            <FavButton />
          </Menu.Item>
          <Menu.Item>
            <LogoutButton />
          </Menu.Item>
        </Menu>
      );
    return(
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <div className="avatar__main">
            <Avatar size='large' icon={<UserOutlined />} className="avatar__icon" />
            <span>Мой аккаунт</span>

          </div>
        </Dropdown>
    )
}

  export default AvatarMenu