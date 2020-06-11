import React from 'react'
import ListItem from './ListItem'

const List = (props) => {

    return (
        <ul className='users-list'>
            {props.users.map((user) => (<ListItem key={user.id} user={user} setUser={props.setUser} />))}
        </ul>
    )
}

export default List