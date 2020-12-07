import React, {useState} from 'react'
import Blogs from '../../components/blogs'
import Users from '../../components/users'

function Main() {

    const blogs = [
        {
            title: 'title1',
            desc: 'title1title1'
        },
        {
            title: 'title2',
            desc: 'title1title2'
        },
        {
            title: 'title3',
            desc: 'title1title3'
        }
    ]

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

    return(
        <div>
            <Blogs blogs={blogs}/> <br/>
            <Users users={users} sortUsers={sortUsers} notSorted={notSorted}/>
        </div>
    )
}

export default Main;