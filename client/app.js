import React, { Component } from 'react'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import FooterBar from './components/FooterBar'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ant-layout-topaside">
        <NavBar />
        <div className="ant-layout-wrapper">
          <div className="ant-layout-container">
            <aside className="ant-layout-sider">
              <SideBar/>
            </aside>
            <div className="ant-layout-content">
              <div style={{clear: 'both'}}>
                { this.props.children }
              </div>
            </div>
          </div>
          <FooterBar/>
        </div>
      </div>
    )
  }
}