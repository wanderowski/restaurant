import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as restActions from '../../actions/restActions'
import { withRouter, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Card } from 'antd';

import './index.css'
import '../../common.css'

const { Meta } = Card;

export function openRestaurant(id) {
    window.location.href=`/rest?id=${id}`
}

function Content(props) {

    const cardHeight = 200
    const cardWidth = 355

    useEffect(() => {
        props.restActions.getRestaurants({
            query: '',
            page: ''
        })
    }, [])

    const rests = props.restaurants

    

    const restsCards = rests.map((item,i) => (
        <div key={i} className="content__card" onClick={() => openRestaurant(item.id)}>
            <Card
                hoverable
                style={{ width: cardWidth, height: cardHeight, marginRight: '40px'}}
                cover={<div style={{width: cardWidth, height: cardHeight, backgroundImage: `url("http://37.18.30.124:9000/${item.image}")`, backgroundSize: 'cover'}}></div>}
            />
            <Meta title={item.name} description={item.location} style={{marginTop: 25}} />
        </div>
    ))
    return (
        <section className="content">
            <div className="container">
                <div className="content__wrapper">
                    <h1  id="restaurants">Рестораны</h1>
                    <div className="content__restaurants">
                        <div className="content__first">
                            {restsCards.length ? restsCards : <h4>Эта информация еще пополняется...</h4>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    restaurants: state.restReducer.restaurants,
  })
  
const mapDispatchToProps = dispatch => ({
    restActions: bindActionCreators(restActions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Content))
