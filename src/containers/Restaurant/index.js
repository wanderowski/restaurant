import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as restActions from '../../actions/restActions'
import * as kitchenActions from '../../actions/kitchenActions'
import { withRouter } from 'react-router-dom'

import { Space, Button, Spin, Table, Rate, Image, Pagination, Input, Upload, message, Modal, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons'



function Restaurant(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newRest, setNewRest] = useState({
        name: '',
        location: '',
        phone: '',
        amountOfPlace: 0,
        image: {},
        averageBill: 0,
        kitchens: [],
        rate: 0
    })

    const [file, setFile] = useState({})
    const { Option } = Select

    const resetRest = () => {
        setNewRest({
            name: '',
            location: '',
            phone: '',
            amountOfPlace: 0,
            image: {},
            averageBill: 0,
            kitchens: [],
            rate: 0
        })
    }

    const showModal = () => {
        setIsModalVisible(true);
        props.kitchenActions.getKitchens()
    }

    const handleOk = () => {
        props.restActions.addRestaurant(newRest)
        console.log(newRest)
        setIsModalVisible(false);
        resetRest()
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        resetRest()
    }

    const restHandler = (e) => {
        setNewRest(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const chooseKitchenHandler = (e) => {
        let id = e.map(item => parseInt(item, 10))
        setNewRest(prev => ({
            ...prev,
            kitchens: `[${id.toString()}]`
        }))
        console.log(newRest)
    }

    const deleteRest = (row) => {
        props.restActions.deleteRestaurant(row.id)
    }

    const uploadImage = async options => {
        const {  file } = options;
        setFile(file)
        setNewRest({...newRest, image: file})
      }

    const handlePageChange = (pageNumber) => {
        props.restActions.getRestaurants({
            query: '', 
            page: `${pageNumber}`
        })
    }

    useEffect(() => {
        props.restActions.getRestaurants({
            query: '',
            page: ''
        })
    }, [])

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
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },

        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },

        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },

        {
            title: 'Capacity',
            dataIndex: 'amountOfPlace',
            key: 'amountOfPlace',
        },

        {
            title: 'Average Bill',
            dataIndex: 'averageBill',
            key: 'averageBill',
        },

        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
        },
      
        {
          title: 'Action',
          key: 'action',
          render: (row) => (
            <Space size="middle">
              <Button type="dashed" >Edit</Button>
              <Button type="complete" danger onClick={() => deleteRest(row)}>Delete</Button>
            </Space>
          ),
        },
      ];

    const data = props.restaurants?.map((item, i) => {
        return {
            key: i,
            id: item.id,
            name: item.name,
            image: <Image width={100}  src={'http://37.18.30.124:9000/'+item.image} />,
            location: item.location,
            phone: item.phone,
            amountOfPlace: item.amountOfPlace,
            averageBill: item.averageBill,
            rate: <Rate allowClear={false} defaultValue={item.rate} />
        }
    })   

    const uploadProps = {
        name: 'file',
        customRequest: uploadImage,
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    
    const kitchens = props.kitchens?.map((item,i) => <Option key={item.id}>{item.name}</Option>)

    return (
        <Spin spinning={props.isLoading}>
            <Button onClick={showModal}>Add Restaurant</Button> <br/><br/>
            {console.log(props.total)}
            <Table columns={columns} dataSource={data} pagination={{defaultCurrent: 1, total: parseInt(props.total), pageSize: parseInt(props.pageSize), onChange: handlePageChange}}/>

            <Modal title="Add New Restaurant" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Space size='middle' direction='vertical'>
                    <label>Name:</label>
                    <Input name="name" onChange={restHandler} value={newRest.name} autoComplete="off"/> 

                    <label>Location:</label>
                    <Input name="location" onChange={restHandler} value={newRest.location} autoComplete="off"/> 

                    <label>Phone:</label>
                    <Input name="phone" onChange={restHandler} value={newRest.phone} autoComplete="off"/> 

                    <label>Capacity:</label>
                    <Input name="amountOfPlace" onChange={restHandler} value={newRest.amountOfPlace} autoComplete="off"/> 

                    <label>Image:</label>
                    <Upload {...uploadProps}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>

                    <label>Average Bill:</label>
                    <Input name="averageBill" onChange={restHandler} value={newRest.averageBill} autoComplete="off"/> 

                    <label>Kitchens:</label>
                    <Select mode="tags" style={{ width: '100%' }} placeholder="Select the kitchens" onChange={chooseKitchenHandler}>
                        {kitchens}
                    </Select> 

                    <label>Rate:</label>
                    <Input name="rate" onChange={restHandler} value={newRest.rate} autoComplete="off"/> 
                </Space>
            </Modal>
            


        </Spin>
    )
}

const mapStateToProps = state => ({
    isLoading: state.restReducer.isLoading,
    restaurants: state.restReducer.restaurants,
    total: state.restReducer.total,
    pageSize: state.restReducer.pageSize,
    addResponse: state.restReducer.addResponse,
    deleteResponse: state.restReducer.deleteResponse,
    kitchens: state.kitchenReducer.kitchens
  })
  
  const mapDispatchToProps = dispatch => ({
    restActions: bindActionCreators(restActions, dispatch),
    kitchenActions: bindActionCreators(kitchenActions, dispatch)
  })
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Restaurant))
