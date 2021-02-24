import React, { useEffect } from 'react'
import { Card, message } from 'antd'
import * as favActions from '../../actions/favActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { openRestaurant } from '../../components/content'
import isEmpty from '../../validation/isEmpty'

import '../../common.css'
import './index.css'

const { Meta } = Card

function Favorites(props) {

    const cardHeight = 200
    const cardWidth = 320

    useEffect(() => {
        props.favActions.getFavorites()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const favs = props.favorites
    
    if(isEmpty(localStorage['token'])) {
        message.error('Вы не авторизованы. Зарегистрируйтесь или авторизуйтесь.')
    }

    const favCards = favs?.map((item, i) => (
        <Card
            key={i}
            hoverable
            onClick={() => openRestaurant(item.Restaurant.id)}
            style={{ width: cardWidth, height: 275, marginRight: 50, marginBottom: 50}}
            cover={<div style={{width: cardWidth, height: cardHeight, backgroundImage: `url("http://37.18.30.124:9000/${item.Restaurant.image}")`, backgroundSize: 'cover'}}></div>}
        >
            <Meta title={item.Restaurant.name} />
        </Card>
    ))
    
    
    return (
        <div className="favorites">
            <Header />
            <div className="container">
                <div className="favorites__wrapper">
                    <h2>Ваши заказы</h2>
                    <div className="favorites__cards">
                        {favs.length ? favCards : <p style={{height: '50vh'}}>У вас нет избранных...</p>}
                    </div>
                </div>
                
            </div>
            
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    favorites: state.favReducer.favorites
})
  
const mapDispatchToProps = dispatch => ({
    favActions: bindActionCreators(favActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Favorites))

