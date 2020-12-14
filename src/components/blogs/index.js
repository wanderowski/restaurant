import React,{useState} from 'react'
import {Button} from 'antd'
import Blog from '../blog'
import ModalItem from '../modal'

function Blogs({style}) {
    const [edit, setEdit] = useState(false)
    const [visible, setVisible] = useState(false)
    const [index, setIndex] = useState(0)

    const [blog, setBlog] = useState({
        title: '',
        desc: ''
    })

    const [blogs, setBlogs] = useState([
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
        ])

    const handleOpenModal = () => {
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
        setEdit(false)
        resetBlog()
    }

    const onChange = e => {
        setBlog(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAdd = (edit) => {
        if(!blog.title.length || !blog.desc.length)
            alert("The input fields cannot be empty")
        else {
            if(edit) {
                blogs[index] = blog
                setBlogs([...blogs])
            }
            else 
                setBlogs([...blogs, blog])
            handleCloseModal()
            resetBlog()
        } 
    }

    const resetBlog = () => {
        setBlog({title: '', desc: ''})
    }

    const deletePost = (key) => {
        setBlogs(blogs.filter((item) => blogs[key]!==item))
    }
    
    const editPost = (key) => {
        setEdit(true)
        setBlog(blogs[key])
        setIndex(key)
        handleOpenModal(edit)

    }

    const blogItems = blogs.map((item, i) => <Blog key={i} title={item.title} desc={item.desc} deletePost={deletePost} editPost={editPost} keyValue={i}/>)

    return(
        <div style={{width: '100%'}}>
            <div style={style}>
                {blogItems}
            </div>
            <div>
                <Button type="primary" onClick={handleOpenModal}>Add Blog</Button>
                <ModalItem 
                    blog={blog}
                    onChange={onChange}
                    visible={visible}
                    handleOk={handleAdd}
                    handleCancel={handleCloseModal}
                    edit={edit}
                />
            </div>
            
        </div>
    )
}

export default Blogs