import React from 'react'
import { Carousel } from 'antd';
import '../../common.css'
import './index.css'

function Slider() {
    const styles = {
        width: '100%',
        minHeight: '75vh',
        backgroundColor: '#F7F4EA'
    }

    return(
        <Carousel style={styles} autoplay={true} autoplaySpeed={3000}>
            <div>
                    <div className="slider__slide" style={{backgroundImage: "url('/img/restaurant/content_1.jpg'), url('/img/restaurant/black-mask.jpg')"}}>
                        <div className="container">
                            <h2 className="slider__h2">Найди свой ресторан</h2>
                            <p className="slider__p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam. Voluptate provident nulla porro ratione inventore vero dolores aspernatur rerum omnis itaque aperiam quaerat nisi, impedit quam, error, nihil voluptatum!Consequatur, odio tempora temporibus perspiciatis repellat praesentium alias iusto incidunt necessitatibus doloremque magnam at reprehenderit atque sapiente quo natus autem omnis deserunt suscipit dolorum? Vel, sunt? Praesentium quisquam mollitia reprehenderit.</p>
                        </div>
                    </div>
            </div>
            <div>
                <div className="slider__slide" style={{backgroundImage: "url('/img/restaurant/content_2.jpg'), url('/img/restaurant/black-mask.jpg')"}}>
                    <div className="container">
                        <h2 className="slider__h2">Все рестораны страны в одном месте</h2>
                        <p className="slider__p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam. Voluptate provident nulla porro ratione inventore vero dolores aspernatur rerum omnis itaque aperiam quaerat nisi, impedit quam, error, nihil voluptatum!Consequatur, odio tempora temporibus perspiciatis repellat praesentium alias iusto incidunt necessitatibus doloremque magnam at reprehenderit atque sapiente quo natus autem omnis deserunt suscipit dolorum? Vel, sunt? Praesentium quisquam mollitia reprehenderit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider__slide" style={{backgroundImage: "url('/img/restaurant/content_3.jpg'), url('/img/restaurant/black-mask.jpg')"}}>
                    <div className="container">
                        <h2  className="slider__h2">Сравнивай цены, оценивай сервис и оставляй комментарии</h2>
                        <p className="slider__p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam. Voluptate provident nulla porro ratione inventore vero dolores aspernatur rerum omnis itaque aperiam quaerat nisi, impedit quam, error, nihil voluptatum!Consequatur, odio tempora temporibus perspiciatis repellat praesentium alias iusto incidunt necessitatibus doloremque magnam at reprehenderit atque sapiente quo natus autem omnis deserunt suscipit dolorum? Vel, sunt? Praesentium quisquam mollitia reprehenderit.</p>
                    </div>
                </div>
            </div>
            
        </Carousel>
    )
}

export default Slider