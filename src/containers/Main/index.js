import React from 'react'
import Blogs from '../../components/blogs'

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

    return(
        <div>
            <Blogs blogs={blogs}/>
        </div>
    )
}

export default Main;