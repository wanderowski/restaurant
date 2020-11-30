import React from 'react'
import facebook from '../../img/widgets/facebook.svg'
import twitter from '../../img/widgets/twitter.svg'
import behance from '../../img/widgets/behance.svg'


function Header() {
    return(
        <header className="header">
            
            <div className="header__container">

                <div className="header__wrapper">

                    <div className="header__logo">
                    
                        <img src={'http://scientia.themerex.net/wp-content/uploads/2018/01/logo-inv-retina.png'} className="header__img" alt="Logo"/>
                    
                    </div>

                    <div className="header__nav">

                        <ul className="header__navlist">

                            <li className="header__navitem header__navitem-active"><a href="#">Home</a></li>
                            <li className="header__navitem"><a href="#">Pages</a></li>
                            <li className="header__navitem"><a href="#">About</a></li>
                            <li className="header__navitem"><a href="#">Events</a></li>
                            <li className="header__navitem"><a href="#">News</a></li>
                            <li className="header__navitem"><a href="#">Space &amp; Rooms</a></li>
                            <li className="header__navitem"><a href="#">Store</a></li>

                            <div className="header__socnets">
                                <img src={facebook} alt="facebook" className="header__socnet"/>
                                <img src={twitter} alt="twitter" className="header__socnet"/>
                                <img src={behance} alt="behance" className="header__socnet"/>

                            </div>
                        </ul>

                    </div>

                  

                </div>

            </div>

        </header>
    )
}

export default Header
