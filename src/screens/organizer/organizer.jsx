import React from 'react'
import { compose } from 'redux'
import forRoute from 'hoc-little-router'

import { protect } from 'redux/auth'
import { Brand, Navbar } from 'screens/shared'
import { Sidebar, SidebarMobile } from './sidebar'
import MyEvents from './myEvents'
import Event from './event'
import { CreateEventForm } from './event/form/main'

const Organizer = () => (
  <div className="layout-screen">
    <Brand className="layout-brand" />
    <Navbar className="layout-navbar" />
    <Sidebar className="layout-sidebar" />
    <div className="layout-main">
      <SidebarMobile />
      <CreateEventForm />
      <Event />
      <MyEvents />
    </div>
  </div>
)

export default compose(forRoute('HOME_ORGANIZER'), protect)(Organizer)
