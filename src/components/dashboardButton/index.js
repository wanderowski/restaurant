import React from 'react'
import {Button} from 'antd'


function DashboardButton() {
    const goDashboard = () => {
        window.location.href = '/dashboard/restaurant'
    }
    return(
            <Button ghost onClick={goDashboard}>
                Dashboard
            </Button>
        )
}


  export default DashboardButton