import React from 'react'
import {Modal} from 'antd'

function ModalItem(props) {
    const {blog, onChange, visible, handleOk, handleCancel, edit} = props
    return (
        <Modal
            title="Basic Modal"
            visible={visible}
            onOk={() => handleOk(edit)}
            onCancel={handleCancel}
        >
            <form action="">
                <fieldset>
                    <label>Title</label>
                    <input name="title" value={blog.title} onChange={onChange} autoComplete="off"/>
                </fieldset>
                <fieldset>
                    <label>Description</label>
                    <input name="desc" value={blog.desc} onChange={onChange} autoComplete="off"/>
                </fieldset>
            </form>
        </Modal>
    )
}

export default ModalItem