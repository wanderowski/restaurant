import React, {useState} from 'react'

function Users({users, sortUsers, notSorted}) {
    const userItems = users.map((item, i) => 
    <tr key={i}>
        <td>{item.name}</td>
        <td>{item.age}</td>
    </tr>)

    const buttonTextName = typeof notSorted.bool === 'undefined' || notSorted.sortBy === 'age' ? 'Sort': notSorted.bool && notSorted.sortBy === 'name' ? 'Ascending' : 'Descending'
    const buttonTextAge = typeof notSorted.bool === 'undefined' || notSorted.sortBy === 'name' ? 'Sort': notSorted.bool && notSorted.sortBy === 'age' ? 'Ascending' : 'Descending'


    return (
        <table>
            <thead>
                <tr>
                    <th>Name <button onClick={() => sortUsers('name')}>{buttonTextName}</button></th>
                    <th>Age <button onClick={() => sortUsers('age')}>{buttonTextAge}</button></th>
                </tr>
            </thead>
            <tbody>
                {userItems}
            </tbody>
        </table>
    )
}

export default Users