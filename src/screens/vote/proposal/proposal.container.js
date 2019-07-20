import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'

import loader from 'components/loader'
import listeners from './proposal.listeners'
import Proposal from './proposal'

const mapStore = (store, props, { router }) => {
  const eventId = router.getParam('eventId')
  const proposalId = router.getParam('proposalId')
  const proposal = store.data.proposals.get(proposalId)
  const event = store.data.events.get(eventId)
  return {
    loaded: !!proposal && !!event,
    proposal,
    eventId,
    load: () => {
      store.dispatch('@@ui/ON_LOAD_PROPOSAL')
      store.dispatch('@@ui/ON_LOAD_EVENT')
    },
  }
}

export default compose(
  forRoute.absolute('vote-event-proposal-page'), //
  inject(mapStore), //
  loader, //
  listen(listeners, 'PROPOSAL'),
)(Proposal)
