import React from 'react'
import { Route } from 'react-router'
import App from './app'
import Welcome from './page/welcome'

const routes = [{
		path: '/',
    component: App,
    indexRoute: { component: Welcome },
    // childRoutes: [
    //   {
    //   	path: 'test',
    //   	component: Other
    //   }
    // ]
	},
	{
		path: '*',
		getComponents(location, callback) {
	    require.ensure([], function (require) {
	      callback(null, require('./page/null'))
	    })
		}
	},
]

export default routes;