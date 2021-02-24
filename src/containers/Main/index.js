import React from 'react'
import Header from '../../components/header'
import Slider from '../../components/slider'
import Content from '../../components/content'
import Footer from '../../components/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as restActions from '../../actions/restActions'
import { withRouter } from 'react-router-dom'


function Main(props) {
    const styles = {
        width: '100%'
    }
    return(
        <div style={styles}>
            <Header />
            <Slider />
            <Content />
            <Footer />
        </div>
    )
}


const mapStateToProps = state => ({
    isLoading: state.restReducer.isLoading,
    restaurants: state.restReducer.restaurants,
    total: state.restReducer.total,
    pageSize: state.restReducer.pageSize,
    addResponse: state.restReducer.addResponse,
    deleteResponse: state.restReducer.deleteResponse,
    kitchens: state.kitchenReducer.kitchens
  })
  
  const mapDispatchToProps = dispatch => ({
    restActions: bindActionCreators(restActions, dispatch),
  })
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Main))
