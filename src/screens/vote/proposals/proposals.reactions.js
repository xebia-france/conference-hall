import * as firebase from 'firebase/proposals'


/* load proposals */
export const loadProposals = async (action, store, { router }) => {
  store.data.proposals.reset()

  const eventId = router.getParam('eventId')
  const { uid } = store.auth.get()

  const proposals = await firebase.fetchEventProposals(eventId, uid)
  store.data.proposals.set(proposals)
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