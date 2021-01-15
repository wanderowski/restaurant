import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

function SearchMain(props) {
    const openRestaurantByID = id => {
        // window.href.location=`/restaurant?id=${id}`
        console.log(id)
    }
    const {rests} = props
    const restsCards = rests.map((item, i) => (
        <div key={i} onClick={() => openRestaurantByID(item.id)}>
            <Card
                hoverable
                style={{ width: 300, height: 400, overflow: 'hidden', marginRight: '40px'}}
                cover={<img alt={''} src={'http://37.18.30.124:9000/'+item.image} />}
            />
            <Meta title={item.name} description={item.location} style={{margin: 25}} />
        </div>
    ))
    return (
        <div style={{width: '100%', padding: '30px 40px', backgroundColor: "#F6F4F5"}}>
            <h2>Результаты Поиска</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                {restsCards}
            </div>
        </div>
    )
}

export default SearchMain