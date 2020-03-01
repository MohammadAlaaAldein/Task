import React, { Component } from 'react'
import axios from 'axios'
import icon from "../icon.ico"

import UserInformation from "../components/UserInformation"

export default class UsersPage extends Component {

    state = {
        users: null,
        user: null,
    }

    UNSAFE_componentWillMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                let users = res.data
                this.setState({ users })
            })
    }

    showUserInfo = async id => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                let user = res.data
                this.setState({ user })
            })
    }


    deleteUser = id => {
        let newUsers = this.state.users.filter(user => {
            return user.id !== id
        })
        this.setState({ users: newUsers })
    }

    close = () => {
        this.setState({ user: null })
    }

    render() {
        const { state, showUserInfo, deleteUser, close } = this
        const { users, user } = state
        return (
            <div style={{ position: "relative" }}>
                {
                    user !== null ?
                        <UserInformation user={user} close={close} />
                        : null
                }
                <div className="d-flex flex-wrap">

                    {
                        users !== null ?
                            users.map((user, key) => {
                                return (
                                    <div key={key} className="card m-1" style={{ width: "24%" }}>
                                        <img className="card-img-top" style={{ borderRadius: "50%" }} src={`https://picsum.photos/100/100?rand=2${user.id}`} alt="user" />
                                        <div className="card-body">
                                            <h5 className="card-title"
                                                onClick={() => showUserInfo(user.id)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {user.name}
                                            </h5>
                                            <img
                                                src={icon} alt="delete icon"
                                                style={{ width: "40px", height: "40px", float: "right", cursor: "pointer" }}
                                                onClick={() => deleteUser(user.id)}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                            : null
                    }
                </div >
            </div>
        )
    }
}
