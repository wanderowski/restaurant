import React from 'react'
import NavItem from '../navitem'


function HeaderLibrary({headerItems}) {
    const navItems = headerItems.map((item, i) =>
        <NavItem key={i} title={item} />
    )
    return(
        <header className="header">
            
            <div className="header__container">

                <div className="header__wrapper">

                    <div className="header__logo">
                    
                        <img src={'http://scientia.themerex.net/wp-content/uploads/2018/01/logo-inv-retina.png'} className="header__img" alt="Logo"/>
                    
                    </div>

                    <div className="header__nav">

                        <ul className="header__navlist">

                            {navItems}

                            <div className="header__socnets">
                                <img src='./img/widgets/facebook.svg' alt="facebook" className="header__socnet"/>
                                <img src='./img/widgets/facebook.svg' alt="twitter" className="header__socnet"/>
                                <img src='./img/widgets/facebook.svg' alt="behance" className="header__socnet"/>

                            </div>
                        </ul>

                    </div>

                  

                </div>

            </div>
        </header>
    )
}

export default HeaderLibrary
