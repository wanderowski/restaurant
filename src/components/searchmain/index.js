import React from 'react'
import { Card } from 'antd';
import '../../common.css';
import { openRestaurant } from '../content'

const { Meta } = Card;

function SearchMain(props) {
    const cardHeight = 200
    const cardWidth = 320
    

    const {rests} = props
    const restsCards = rests.map((item, i) => (
        <div key={i}>
            <Card
                onClick={() => openRestaurant(item.id)}
                hoverable
                style={{ width: cardWidth, height: cardHeight, marginRight: '40px'}}
                cover={<div style={{width: cardWidth, height: cardHeight, backgroundImage: `url("http://37.18.30.124:9000/${item.image}")`, backgroundSize: 'cover'}}></div>}
            />
            <Meta title={item.name} description={item.location} style={{marginTop: 25}} />
        </div>
    ))
    return (
        <div style={{width: '100%', padding: '30px 40px', backgroundColor: "#F6F4F5"}}>
            <h2>Результаты Поиска</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                {rests.length ? restsCards : <p style={{height: '50vh'}}>По вашему запросу ничего не найдено...</p>}
            </div>
        </div>
    )
}

export default SearchMain