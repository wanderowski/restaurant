import React from 'react'
import Header from '../../components/header'
import Content from '../../components/content'
import Footer from '../../components/footer'

function Main() {
    const styles = {
        backgroundColor: 'red'
    }
    return(
        <div style={styles}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Main