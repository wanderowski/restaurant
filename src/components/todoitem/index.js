import React, {useState} from 'react'

function ToDoItem({desc, key}) {
    const styles = {
        width: '300px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }

    const stylesDefault = {
        width: '200px',
        margin: '5px 0px',
        padding: '10px 15px',
        border: '1px solid #a4a4a4',
        textAlign: 'left',
        transition: '0.1s'
    }
    const stylesChecked= {
        textDecoration: 'line-through',
        backgroundColor: 'red'

    }

    const [cross, setCross] = useState(false)
    const crossOut = () => {
        setCross(!cross)
    }
    return (
        
        <div style={styles} key={key}>
            <input type="checkbox" style={{marginRight: '20px'}} onChange={crossOut}/><p style={Object.assign(cross ? stylesChecked : {}, stylesDefault)}>{desc}</p>
        </div>
        
    )
}

export default ToDoItem
