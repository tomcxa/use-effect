import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader'
import List from './components/List'
import Details from './components/Details'



const url = (anchor) => (process.env.REACT_APP_URL + anchor)
console.log(url('users.json'))

function App() {
    const [loading, setLoading] = useState({ users: false, info: false })
    const [users, setUsers] = useState([])
    const [selectedUser, selectUser] = useState()
    const [info, setInfo] = useState()

    useEffect(() => {
        setLoading({ users: true, info: false })
        fetch(url('users.json'))
            .then(response => response.json())
            .then(result => {
                setLoading({ users: false, info: false })
                setUsers(result)
            })
    }, [])

    useEffect(() => {
        if (selectedUser) {
            setLoading({ users: false, info: true })
            fetch(url(`${selectedUser}.json`))
                .then(response => response.json())
                .then(result => {
                    setLoading({ users: false, info: false })
                    setInfo(result)
                })
        }
    }, [selectedUser])

    function setUser(id) {
        selectUser(id)
    }

    return (
        <div className="App">
            {loading.users ? <Loader />
                : <div className='users-list-wrapper'><List users={users} setUser={setUser} /></div>}
            {loading.info ? <Loader />
                : <div className='info-wrapper'><Details info={info} /></div>}
        </div>
    );
}

export default App;
