import React from 'react'
import { Button } from 'antd'


function OrdersButton() {

    const openOrders = () => {
        window.location.href="/orders"
    }
    return(
        <Button type="text" ghost onClick={openOrders}>
            Мои заказы
        </Button>
    )
}


export default OrdersButton