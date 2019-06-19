import React from 'react'
import { compose } from 'redux'
import { forRoute } from '@k-redux-router/react-k-ramel'

import { protect } from 'store/reducers/auth'
import AppLayout from 'layout'
import Profile from 'screens/components/profile'

import Proposals from './proposals'
import Proposal from './proposal'

const Vote = () => (
  <AppLayout backLinkArgs={{code: 'vote-event-proposals', eventId: 'eOlXza98MufDjio43ulH'}}>
    <Profile />
    <Proposals />
    <Proposal />
  </AppLayout>
)

export default compose(
  forRoute('vote'),
  protect
)(Vote)
