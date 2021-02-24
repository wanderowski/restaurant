import React, {useEffect, useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Order from '../../components/order'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as restActions from '../../actions/restActions'
import * as kitchenActions from '../../actions/kitchenActions'
import * as revActions from '../../actions/revActions'
import * as favActions from '../../actions/favActions'
import * as orderActions from '../../actions/orderActions.js'
import { withRouter } from 'react-router-dom'
import {Row, Col, Image, Tag, Descriptions, Rate, Comment, Empty, Space, Form, Button, Input, message} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import '../../common.css'
import './index.css'
import jwtDecode from 'jwt-decode'
import isFavorite from '../../validation/isFavorite'
import isEmpty from '../../validation/isEmpty'

const { TextArea } = Input;


function Rest(props) {
    const id = new URLSearchParams(props.location.search).get('id');

    const [isModalVisible, setIsModalVisible] = useState(false)

    const [favImage, setFavImage] = useState("/img/widgets/favourite_transparent.svg")

    const [comment, setComment] = useState({
        text: '',
        restaurantId: id
    })

    const [orderDate, setOrderDate] = useState({
        date: new Date().toISOString().substring(0,10),
        time: new Date().toLocaleTimeString().substring(0,8)
    })
    
    
    const [order, setOrder] = useState({
        userId: isEmpty(localStorage['token']) ? null : jwtDecode(localStorage['token']).id,
        restaurantId: id,
        orderdate: `${orderDate.date} ${orderDate.time}`,
        guest: ''
    })
    

    useEffect(() => {
        props.restActions.getRestaurant(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        props.favActions.getFavorites()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage['token']])

    useEffect(() => {
        if(isFavorite(rest.name, props.favorites)) {
            setFavImage("/img/widgets/favourite_filled.svg")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.favorites])
    
    const rest = props.restaurant

    const kitchens = rest.ResKitLists?.map((item, i) => (
        <Tag key={i} color="blue">{item.Kitchen.name}</Tag>
    ))
    
    const reviews = rest.Reviews?.map((item, i) => (
        <Comment 
            key={i}
            content={
                <p>
                    {item.text}
                </p>
            }
            avatar={
                <UserOutlined />
            }
            style={
                {
                    width: 750,
                    border: '1px solid black',
                    borderRadius: '20px',
                    padding: '5px 15px',
                    marginBottom: '15px',
                    backgroundColor: '#D9EDFD'
                }
            }
        />
    ))
    
    const onChange = (e) => {
        setComment(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))    
    }

    const onSubmit = () => {
        props.revActions.addReview(comment)
        document.querySelector('rest__text').target.value = ""
        
    }
    
    const addFavorite = (id) => {
        if(isFavorite(rest.name, props.favorites)) {
            message.info("Этот ресторан уже в избранных")
        }
        else {
            const userId = jwtDecode(localStorage['token']).id
            props.favActions.addFavorite({
            userId: userId,
            restaurantId: id
        })
        }
        
    }

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setOrder(prev => ({...prev,
            orderdate: `${orderDate.date} ${orderDate.time}`,
        }))
        props.orderActions.addOrder(order)
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const handleDate = (date_format, dateString) => {
        setOrderDate(date => ({
            ...date,
            date: dateString
        }))
    }

    const handleTime = (time_format, timeString) => {
        setOrderDate(date => ( { 
            ...date,
            time: timeString
        }))
        
    }

    const handleGuests = (e) => {
        setOrder(order=> ({
            ...order,
            guest: e.target.value
        }))
    }




    return (
        <div style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <Header />
            <div className="container">
                <div className="rest__wrapper">
                    <Row justify={'space-between'} align={'top'}>
                        <Col span={8} >
                            <Image src={`http://37.18.30.124:9000/${rest.image}`} span={4} />
                        </Col>
                        <Col span={14}>
                            <Row justify={'left'}>
                                <Space size="large" align="center">
                                    <h1 className="rest__name">{rest.name}</h1>
                                    {localStorage['token'] ? <img alt="Add to Favorites" src={favImage} onClick={() => addFavorite(id)} className="rest__fav"/> : ""}
                                    <Button onClick={showModal}>Забронировать</Button>
                                </Space>
                                
                            </Row>
                            <Row> 
                                <Col span={16}>
                                    <Descriptions title="О ресторане" layout="vertical" size='small'>
                                        <Descriptions.Item label="Расположение">{rest.location}</Descriptions.Item>
                                        <Descriptions.Item label="Телефон ">{rest.phone}</Descriptions.Item>
                                        <Descriptions.Item label="Вместимость ">{rest.amountOfPlace} мест</Descriptions.Item>
                                        <Descriptions.Item label="Средний чек ">{rest.averageBill}</Descriptions.Item>
                                        <Descriptions.Item label="Кухни ">{kitchens}</Descriptions.Item>
                                        <Descriptions.Item label="Рейтинг ">
                                            <Rate value={rest.rate} />
                                        </Descriptions.Item>
                                </Descriptions>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="rest__comments">
                        <Space size="middle" direction="vertical" style={{minWidth: 1000}} align="center">
                            <h2>Отзывы посетителей: </h2>
                            {reviews?.length ? reviews : <Empty description={<span>К сожалению, пока нет отзывов на этот ресторан</span>}/> }
                            <Form style={{width: 800}} onFinish={onSubmit}>
                                <Form.Item>
                                    <TextArea id="rest__text" rows={4} onChange={onChange} placeholder="Пожалуйста, напишите ваш отзыв" name="text"/>
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" type="primary">
                                        Добавить отзыв
                                    </Button>
                                </Form.Item>                             
                            </Form>
                        </Space>
                    </Row>
                </div>
            </div>
            <Footer />
            <Order isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} handleDate={handleDate} handleTime={handleTime} handleGuests={handleGuests} order={order}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.restReducer.isLoading,
    restaurant: state.restReducer.restaurant,
    kitchens: state.kitchenReducer.kitchens,
    review: state.revReducer.review,
    favorite: state.favReducer.favorite,
    color: state.favReducer.color,
    favorites: state.favReducer.favorites,
    order: state.orderReducer.order
  })
  
  const mapDispatchToProps = dispatch => ({
    restActions: bindActionCreators(restActions, dispatch),
    kitchenActions: bindActionCreators(kitchenActions, dispatch),
    revActions: bindActionCreators(revActions, dispatch),
    favActions: bindActionCreators(favActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch)
  })
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Rest))