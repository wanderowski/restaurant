import React, {useEffect} from 'react'
import Header from '../../components/header'
import SearchMain from '../../components/searchmain'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as restActions from '../../actions/restActions'
import { withRouter } from 'react-router-dom'


function Search(props) {
    const query = new URLSearchParams(props.location.search).get('query');

    const onSearch = (query) => {
        window.location.href = `/search?query=${query}`
    }
    
    const onChange = (page) => {
        props.restActions.getRestaurants({
            query: query,
            page: `${page}`
        })
        console.log(page)
    }
    useEffect(() => {
        props.restActions.getRestaurants({
            query: query,
            page: ''
        })
    }, [query])

    const rests = props.restaurants
    const total = props.total
    const pageSize = props.pageSize

    return(
        <div style={{width: '100%'}}>
            <Header onSearch={onSearch} />
            <SearchMain rests={rests} total={total} pageSize={pageSize} onChange={onChange}/>
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
  })
  
const mapDispatchToProps = dispatch => ({
    restActions: bindActionCreators(restActions, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Search))

