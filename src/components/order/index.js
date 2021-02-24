import React from 'react'
import { Modal, Select, DatePicker, Input, TimePicker, Space } from 'antd'
import './index.css'

function Order(props) {


    const { isModalVisible, handleCancel, handleOk, handleDate, handleTime, handleGuests } = props

    return (
        <Modal title="Бронь ресторана" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Space direction="vertical" size="large" className="order__main">
                <label>Выбериту дату и время: </label>
                <DatePicker placeholder={'Введите дату'} onChange={handleDate} />
                <TimePicker placeholder={'Введите время'} format={'HH:mm'} onChange={handleTime}/>
                <label>Количество гостей: </label>
                <Input onChange={handleGuests}/>
            </Space>
            
        </Modal>
    )
}


export default Order

