import React, {useState} from 'react'
import Blogs from '../../components/blogs'
import Users from '../../components/users'
import {Link} from 'react-router-dom'

function Main() {

    

    const [users, setUsers] = useState([
        {name: 'Bekzat', age: 20},
        {name: 'Bekarys', age: 24},
        {name: 'Dauren', age: 24},
        {name: 'Amir', age: 21}
    ])
    const [notSorted, setNotSorted] = useState({
        bool: undefined,
        sortBy: ''
    })

    const sortUsers = sort => {
        const elements = [...users]
        if (notSorted.bool) {
            elements.sort((a,b) => a[sort]>b[sort] ? 1: a[sort]<b[sort] ? -1 : 0)
        }
        else {
            elements.sort((a,b)=>a[sort]>b[sort] ? -1: a[sort]<b[sort] ? 1 : 0)
            
        }
        setNotSorted({
            bool: !notSorted.bool,
            sortBy: sort
        })
        setUsers(elements)
        
    }

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        flexWrap:'wrap',
    }

    return(
        <div style={{width: '100%'}}>
            <Blogs style={styles}/> <br/>

        </div>
    )
}

export default Main;