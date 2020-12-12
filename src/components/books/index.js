import React from 'react'
import './index.css'

function Books({books}) {
    const booksBlocks = books.map((item, i) => 
    <div className="books__card" key={i}>
        <div className="books__imgwrapper">
            <img src={item.url} alt={`Book ${i+1}`} className="books__img"/>
        </div>
        <div className="books__hovers">
            <a href="#"><img src="./img/hw2/shopping-cart.svg" alt="shop" className="books__link"/></a>
            <a href="#"><img src="./img/hw2/link.svg" alt="link" className="books__link"/></a>
        </div>
        <h4 className="books__title">{item.title}</h4>
        <h5 className="books__desc">{item.desc}</h5>
        <p className="books__cost">${item.cost.dollar}<sup>{item.cost.cents}</sup></p>
        
    </div>
    )

    const isAuth = false
    const loginButton = <button style={{margin: '30px 0'}}>Log in</button>
    const authBlock = 
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px', margin: '30px 0'}}>       
        <p>Hello, Dauren!</p>
        <button>Profile</button>
    </div>
    return (
        <div className="books">
            <h2 className="books__header"><span style={{borderBottom: '5px solid #F3701D', padding: '10px 0'}}>N</span>ew &amp; Notable </h2>
            {isAuth ? authBlock : loginButton}
            <div className="books__wrapper">
                {booksBlocks}
            </div>
            
        </div>
    )
}

export default Books