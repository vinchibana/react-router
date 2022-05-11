import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './pages/css/bootstrap.css'
import Header from "./components/header";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
