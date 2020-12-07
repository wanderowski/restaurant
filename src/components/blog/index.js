import React from 'react'

function Blog(props) {
    const {title, desc} = props;
    return(
        <div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Blog