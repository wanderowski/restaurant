import React from 'react'

function Header() {

    let text = ''
    const isShow = true

    isShow ? text = 'Текст 1' : text = 'Текст 2'

    const divStyle = {
        backgroundColor: 'green',
        border: '1px solid black',
        borderRadius: '30px'
    }

    const arr = ['a','b','c','d','e']
    const lis = arr.map((item, i) => <li key={i}>{item}</li>)

    const getNum1 = () => 1

    const getNum2 = () => 2

    let tempBool = false

    const handleClick = () => {
        tempBool = true
        console.log(tempBool)
    }

    const images = [
        {
            title: 'Picture 1',
            url: '/img/lesson 2/001-blogger.svg',
            desc: 'This is picture 1',
            alt: 'something 1'
        },
        {
            title: 'Picture 2',
            url: '/img/lesson 2/002-kickstarter.svg',
            desc: 'This is picture 2',
            alt: 'something 2'
        },
        {
            title: 'Picture 3',
            url: '/img/lesson 2/003-flickr.svg',
            desc: 'This is picture 3',
            alt: 'something 3'
        },
        {
            title: 'Picture 4',
            url: '/img/lesson 2/004-tumblr.svg',
            desc: 'This is picture 4',
            alt: 'something 4'
        },
        {
            title: 'Picture 5',
            url: '/img/lesson 2/005-facebook.svg',
            desc: 'This is picture 5',
            alt: 'something 5'
        },
        {
            title: 'Picture 6',
            url: '/img/lesson 2/006-twitter.svg',
            desc: 'This is picture 6',
            alt: 'something 6'
        }
    ]
    const imgStyle = {
        width: '200px'
    }

    const blocks = images.map((item, i) => 
    <div key={i}>
        <h2>{item.title}</h2>
        <img style={imgStyle} src={item.url} alt={item.alt}/>
        <p>{item.desc}</p>
        <br />
    </div>
    )

   
    return (
        
        <div style={divStyle}>
            Текст and {text}
            {lis}
            Результат: {getNum1() + getNum2()} <br></br>

            <button onClick={()=>handleClick()}>Change to True</button>
            <div>
            <img style={imgStyle} src="/img/lesson 2/IMG_0568.JPG" alt="Dog"/>
            <h5>This is my Dog!</h5>

            {blocks}
        </div>
        </div>

        
    )
}

export default Header