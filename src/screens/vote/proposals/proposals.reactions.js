import * as firebase from 'firebase/proposals'
import { fetchOrganizationEvents } from 'firebase/organizations'
import eventCrud from 'firebase/events'
import { shuffle } from 'helpers/array'


/* load proposals */
export const loadProposals = async (action, store, { router }) => {
  store.data.proposals.reset()

  const eventId = router.getParam('eventId')
  const { uid } = store.auth.get()

  const proposals = await firebase.fetchEventProposals(eventId, uid)
  store.data.proposals.set(shuffle(proposals))
}

/* select a proposal */
export const selectProposal = async (action, store, { router }) => {
  const { eventId, proposalId } = action.payload
  const proposalKeys = store.data.proposals.getKeys()
  const proposalIndex = proposalKeys.indexOf(proposalId)

  if (proposalIndex !== -1) {
    store.ui.organizer.proposal.set({ proposalIndex })
    const filters = store.ui.organizer.proposals.get()
    router.push(
      'vote-event-proposal-page',
      { eventId, proposalId },
      { ...filters },
    )
  }
}

export const fetchEvent = async (action, store, { router }) => {
  const eventId = action.payload || router.getParam('eventId')
  if (!eventId) return
  // check if already in the store
  const current = store.data.events.get(eventId)
  if (current && current.id === eventId) return
  // fetch event from id
  const ref = await eventCrud.read(eventId)
  if (ref.exists) {
    store.data.events.add({ id: eventId, ...ref.data() })
  }
}
