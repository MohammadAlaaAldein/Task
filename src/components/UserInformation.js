import React, { Component } from 'react'
import "../style/PopupStyle.css"

export default class UserInformation extends Component {
    render() {
        const { user, close } = this.props
        return (
            <div className="modal-body m-5" >
                <h6 className="close" onClick={close}>Close</h6>
                <h5>Name : {user.name}</h5>
                <h5>Username : {user.username}</h5>
                <h5>Email : {user.email}</h5>
                <h5>Address :</h5>
                <li>Street : {user.address.street}</li>
                <li>Suite : {user.address.suite}</li>
                <li>city : {user.address.city}</li>
                <li>Zipcode : {user.address.zipcode}</li>
                <li>Geo : lat : {user.address.geo.lat} lng : {user.address.geo.lng}</li>
                <h5>Phone : {user.phone}</h5>
                <h5>Website : {user.website}</h5>
                <h5>Company :</h5>
                <li>Company Name : {user.company.name}</li>
                <li>Company CatchPrase : {user.company.catchPhrase}</li>
                <li>Company BS : {user.company.bs}</li>
            </div>
        )
    }
}