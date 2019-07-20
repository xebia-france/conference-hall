import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'

import loader from 'components/loader'
import listeners from './proposals.listeners'
import Proposals from './proposals'

const mapStore = (store, props, { router }) => {
  const eventId = router.getParam('eventId')
  const event = store.data.events.get(eventId)
  const nbProposals = store.data.proposals.getLength()
  return {
    loaded: !!event,
    nbProposals,
    eventId,
    load: () => {
      store.dispatch('@@ui/ON_LOAD_EVENT_FOR_VOTE')
    },
  }
}

export default compose(
  forRoute('vote-event-proposals'),
  inject(mapStore),
  listen(listeners, 'PROPOSALS'),
  loader,
)(Proposals)
