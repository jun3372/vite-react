import React from "@pika/react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import logo from '../logo.svg'

import '../css/app.css'


export default () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Link to="/home">首页</Link>
        <Link to="/about" style={{ marginLeft: 10 }}>关于</Link>
        <hr />
      </div>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  )
}
