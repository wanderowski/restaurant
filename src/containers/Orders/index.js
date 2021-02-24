import React, {useEffect} from 'react'
import {Card } from 'antd'
import * as orderActions from '../../actions/orderActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { openRestaurant } from '../../components/content'

import '../../common.css'
import './index.css'

const { Meta } = Card

function Orders(props) {

    const cardHeight = 200
    const cardWidth = 320

    useEffect(() => {
        props.orderActions.getOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const orders = props.orders
    

    const orderCards = orders?.map((item, i) => (
        <Card
            key={i}
            onClick={() => openRestaurant(item.Restaurant.id)}
            hoverable
            style={{ width: cardWidth, height: 350, margin: '0 40px 40px 0'}}
            cover={<div style={{width: cardWidth, height: cardHeight, backgroundImage: `url("http://37.18.30.124:9000/${item.Restaurant.image}")`, backgroundSize: 'cover'}}></div>}
        >
            <Meta title={item.Restaurant.name} description={`Кол-во гостей: ${item.guest}`} />
            <Meta description={`Дата и время: ${item.orderdate}`} />
        </Card>
    ))
    
    
    return (
        <div className="orders">
            <Header />
            <div className="container">
                <div className="orders__wrapper">
                    <h2>Ваши заказы</h2>
                    <div className="orders__cards">
                        {orders.length ? orderCards : <p style={{height: '50vh'}}>Вы пока ничего не забронировали...</p>}
                    </div>
                </div>
                
            </div>
            
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    orders: state.orderReducer.orders
})
  
const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Orders))

