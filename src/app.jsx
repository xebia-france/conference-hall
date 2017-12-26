import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import withTheme from 'styles/themes/withTheme'
import Toaster from 'components/toaster'
import Home from './screens/home'
import Login from './screens/login'
import Organizer from './screens/organizer'
import Speaker from './screens/speaker'

import './styles'

const App = ({ className }) => (
  <div className={cn('app', className)}>
    <Home />
    <Login />
    <Organizer />
    <Speaker />
    <Toaster />
  </div>
)

App.propTypes = {
  className: PropTypes.string,
}

App.defaultProps = {
  className: 'default-theme',
}

export default withTheme(App)
