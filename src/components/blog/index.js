import React from 'react'
import {Dropdown, Menu, Card, Button} from 'antd'

function Blog(props) {
    const {title, desc, deletePost, editPost, keyValue} = props;

    function handleMenuClick(e) {
        if (e.key === '1') {
            editPost(keyValue)
        }
        else if(e.key === '2') {
            deletePost(keyValue)
        }
      }

    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">Edit</Menu.Item>
          <Menu.Item key="2">Delete</Menu.Item>
        </Menu>
      );
    //   <Button type="primary" onClick={() => deletePost(keyValue)} danger>Delete</Button>

    return(
        <Card title={title} extra={
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button>•••</Button>
          </Dropdown>
        } style={{ width: '25%', margin: 30}}>
            <p>{desc}</p>
        </Card>
    )
}

export default Blog