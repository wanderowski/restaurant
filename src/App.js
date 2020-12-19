import './styles.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import configureStore from './store'
import {Provider} from 'react-redux'

import Main from './containers/Main'

import ToDo from './containers/ToDo'

import Header from './components/header'
import Books from './components/books'
import SignUp from './containers/SignUp'

import 'antd/dist/antd.css';


function App() {

  const headerItems = ['Home', 'Pages', 'About', 'Events', 'News', 'Space & Rooms', 'Store']

  const books = [
    {
        url: './img/hw2/book1.png',
        title: 'The Life Lessons',
        desc: 'The Life Lessons is the book about self education and...',
        cost: {
            dollar: '65',
            cents: '00'
        }
    },
    {
        url: './img/hw2/book2.png',
        title: 'The Untold Tales',
        desc: 'One of the biggest art projects in the world of...',
        cost: {
            dollar: '62',
            cents: '00'
        }
    },
    {
        url: './img/hw2/book3.png',
        title: 'Hobbye Lobbye',
        desc: 'A great story about politicians and their secret private life...',
        cost: {
            dollar: '49',
            cents: '00'
        }
    },
    {
        url: './img/hw2/book4.png',
        title: 'Where They Sing',
        desc: 'The best selling novel of all times about love and...',
        cost: {
            dollar: '58',
            cents: '00'
        }
    }
]
    const store = configureStore()
  return (
    <div className="App">
        <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={SignUp}/>
            </Switch>
        </Router>
        </Provider>

    </div>
  );
}

export default App;
