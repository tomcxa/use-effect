import React from 'react'

const ListItem = ({ user, setUser }) => {
    function handleClick() {
        setUser(user.id)
    }

    return (
        <li onClick={handleClick}>{user.name}</li>
    )
}

export default ListItem