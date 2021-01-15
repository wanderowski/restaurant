import React from 'react'
import { Carousel } from 'antd';
import '../../common.css'
import './index.css'

function Content() {
    const styles = {
        width: '100%',
        minHeight: '75vh',
        backgroundColor: '#EBECFF'
    }

    return(
        <div style={styles}>
            <Carousel style={{width: '100%', height: '600px'}}>
                <div>
                        <div className="content__slide" style={{backgroundImage: "url('/img/restaurant/content_1.jpg'), url('/img/restaurant/black-mask.jpg')"}}>
                            <div className="container">
                                <h2>Restaurant Almaty</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam. Voluptate provident nulla porro ratione inventore vero dolores aspernatur rerum omnis itaque aperiam quaerat nisi, impedit quam, error, nihil voluptatum!Consequatur, odio tempora temporibus perspiciatis repellat praesentium alias iusto incidunt necessitatibus doloremque magnam at reprehenderit atque sapiente quo natus autem omnis deserunt suscipit dolorum? Vel, sunt? Praesentium quisquam mollitia reprehenderit.</p>
                            </div>
                        </div>
                </div>
                <div>
                    <div className="content__slide" style={{backgroundImage: "url('/img/restaurant/content_2.jpg'), url('/img/restaurant/black-mask.jpg')"}}>
                        <div className="container">
                            <h2>Restaurant Nur-Sultan</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam. Voluptate provident nulla porro ratione inventore vero dolores aspernatur rerum omnis itaque aperiam quaerat nisi, impedit quam, error, nihil voluptatum!Consequatur, odio tempora temporibus perspiciatis repellat praesentium alias iusto incidunt necessitatibus doloremque magnam at reprehenderit atque sapiente quo natus autem omnis deserunt suscipit dolorum? Vel, sunt? Praesentium quisquam mollitia reprehenderit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content__slide" style={{backgroundImage: "url('/img/restaurant/content_3.jpg'), url('/img/restaurant/black-mask.jpg')"}}>
                        <div className="container">
                            <h2>Restaurant Shymkent</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam. Voluptate provident nulla porro ratione inventore vero dolores aspernatur rerum omnis itaque aperiam quaerat nisi, impedit quam, error, nihil voluptatum!Consequatur, odio tempora temporibus perspiciatis repellat praesentium alias iusto incidunt necessitatibus doloremque magnam at reprehenderit atque sapiente quo natus autem omnis deserunt suscipit dolorum? Vel, sunt? Praesentium quisquam mollitia reprehenderit.</p>
                        </div>
                    </div>
                </div>
                
            </Carousel>
            
        
        </div>
    )
}

export default Content