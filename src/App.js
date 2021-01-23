import './styles.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from './store'
import {Provider} from 'react-redux'

import 'antd/dist/antd.css';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode'
import * as types from './actions/types'

import Dashboard from './containers/Dashboard';
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import Main from './containers/Main';
import Search from './containers/Search'
import Rest from './containers/Rest';

const store = configureStore()

if (localStorage.token) {
    setAuthToken(localStorage.token)
    const decoded = jwt_decode(localStorage.token)
    store.dispatch({type: types.SET_CURRENT_USER, payload: decoded})
    const currentTime = Date.now()/1000
    if (decoded.exp < currentTime) { 
        localStorage.removeItem('token')
        setAuthToken(false)
        store.dispatch({type: types.SET_CURRENT_USER, payload: {}})
        window.location.href = '/'
    } 
}

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/rest" component={Rest} />
                
            </Switch>
        </Router>
        </Provider>

    </div>
  );
}

export default App;
