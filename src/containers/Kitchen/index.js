import React, {useEffect, useState} from 'react'
import { Table, Space, Button, Spin, Modal, Input} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as kitchenActions from '../../actions/kitchenActions'
import {withRouter} from 'react-router-dom'



function Kitchen(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState(false)

    const [newKitchen, setNewKitchen] = useState({
        id: parseInt(),
        name: ''
    })

    const resetKitchen = () => {
      setNewKitchen({
          name: ''
      })
    }
    
    const showModal = () => {
        setIsModalVisible(true);
    }

    const showEditModal = () => {
      setIsModalEditVisible(true)
    }

    const handleOk = () => {
        props.kitchenActions.addKitchen(newKitchen)
        alert(props.kitchenResponse)
        setIsModalVisible(false);
        resetKitchen()
    }

    const handleEditOk = () => {
      props.kitchenActions.editKitchen({
        id: newKitchen.id,
        name: newKitchen.name
      })
      setIsModalEditVisible(false)
      resetKitchen()
    }
    
    const handleCancel = () => {
        setIsModalVisible(false);
        setIsModalEditVisible(false);
        resetKitchen()
    }

    const deleteKitchen = (row) => {
      props.kitchenActions.deleteKitchen(row.id)
    }

    const editKitchen = (row) => {
      setNewKitchen({
        id: row.id,
        name: row.name
      })
      showEditModal()
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
          defaultSortOrder: 'ascend'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
      
        {
          title: 'Action',
          key: 'action',
          render: (row) => (
            <Space size="middle">
              <Button type="dashed" onClick={() => editKitchen(row)}>Edit</Button>
              <Button type="complete" danger onClick={() => deleteKitchen(row)}>Delete</Button>
            </Space>
          ),
        },
      ];

      const data = props.kitchens?.map((item, i) => {
          return {
              key: i,
              id: item.id,
              name: item.name
          }
      })      
      
      useEffect(() => {
        props.kitchenActions.getKitchens()
      }, [])

    const kitchenNameHandler = (e) => {
        setNewKitchen(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    console.log(props.isLoading)
    return(
        <Spin spinning={props.isLoading}>
            <Button onClick={showModal}>Add Kitchen</Button> <br/><br/>
            <Table size="small" columns={columns} dataSource={data} />

            <Modal title="Add New Kitchen" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <label>Please, indicate the name of a kitchen:</label><br/>
                <Input name="name" onChange={kitchenNameHandler} value={newKitchen.name} autoComplete="off"/> 
            </Modal>
            
            <Modal title="Edit Kitchen" visible={isModalEditVisible} onOk={handleEditOk} onCancel={handleCancel}>
                <label>Please, indicate the name of a kitchen:</label><br/>
                <Input name="name" onChange={kitchenNameHandler} value={newKitchen.name} autoComplete="off"/> 
            </Modal>
        </Spin>

    )
}
const mapStateToProps = state => ({
    isLoading: state.kitchenReducer.isLoading,
    kitchens: state.kitchenReducer.kitchens,
    kitchenResponse: state.kitchenReducer.kitchenResponse,
    deleteResponse: state.kitchenReducer.deleteResponse,
    editResponse: state.kitchenReducer.editResponse
  })
  
  const mapDispatchToProps = dispatch => ({
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
  })
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Kitchen))
