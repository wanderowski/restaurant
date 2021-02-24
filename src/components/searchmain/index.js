import React from 'react'
import { Card, Pagination } from 'antd';
import '../../common.css';
import './index.css'
import { openRestaurant } from '../content'


const { Meta } = Card;

function SearchMain(props) {
    const cardHeight = 200
    const cardWidth = 320
    

    const {rests, total, pageSize, onChange} = props
    const restsCards = rests.map((item, i) => (
        <div key={i}>
            <Card
                onClick={() => openRestaurant(item.id)}
                hoverable
                style={{ width: cardWidth, marginRight: '40px', marginTop: '40px'}}
                cover={<div style={{width: cardWidth, height: cardHeight, backgroundImage: `url("http://37.18.30.124:9000/${item.image}")`, backgroundSize: 'cover'}}></div>}
            >
                <Meta title={item.name} description={item.location} />
            </Card>
        </div>
    ))
    return (
        <div className="searchmain" >
            <div className="container">
                <div className="searchmain__wrapper">
                    <h2>Результаты Поиска</h2>
                    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                        {rests.length ? restsCards : <p style={{height: '50vh'}}>По вашему запросу ничего не найдено...</p>}
                    </div>
                    <Pagination defaultCurrent={1} total={total} pageSize={pageSize} onChange={onChange} style={{margin: 20}}/>
                </div>
            </div>
        </div>
    )
}

export default SearchMain