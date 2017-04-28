import React, { Component } from 'react'
import { Link } from 'react-router'

class NoMatch extends Component {
  render() {
    return (
	    <div>
	    	<p>没有找到页面</p>
	    	<p><Link to={'/'}>返回首页</Link></p>
	    </div>
    )
  }
}

module.exports = NoMatch
