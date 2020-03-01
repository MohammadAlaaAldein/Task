import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"

import UsersPage from "./components/UsersPage"

export default class App extends Component {
  render() {
    return (
      <div>
        <UsersPage />
      </div>
    );
  }
}
