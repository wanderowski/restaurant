import React from 'react'
import Blog from '../blog'

function Blogs(props) {
    const {blogs} = props;

    const blogItems = blogs.map((item, i) => <Blog key={i} title={item.title} desc={item.desc}/>)

    return(
        <div>
            {blogItems}
        </div>
    )
}

export default Blogs