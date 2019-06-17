export const nextProposal = async (action, store, { router }) => {
  const eventId = router.getParam('eventId')
  const { proposalIndex } = store.ui.organizer.proposal.get()
  const proposalKeys = store.data.proposals.getKeys()
  const nextIndex = proposalIndex + 1
  if (nextIndex < proposalKeys.length) {
    const proposalId = proposalKeys[nextIndex]
    store.ui.organizer.proposal.set({ proposalIndex: nextIndex })
    store.dispatch({ type: '@@ui/ON_LOAD_LIKE', payload: { eventId, proposalId } })
    router.push('vote-event-proposal-page', { eventId, proposalId })
  }
}

export const previousProposal = async (action, store, { router }) => {
  const eventId = router.getParam('eventId')
  const { proposalIndex } = store.ui.organizer.proposal.get()
  const proposalKeys = store.data.proposals.getKeys()
  const prevIndex = proposalIndex - 1
  if (prevIndex >= 0) {
    const proposalId = proposalKeys[prevIndex]
    store.ui.organizer.proposal.set({ proposalIndex: prevIndex })
    store.dispatch({ type: '@@ui/ON_LOAD_LIKE', payload: { eventId, proposalId } })
    router.push('vote-event-proposal-page', { eventId, proposalId })
  }
}

export const likeProposal = liked => console.log(liked);