import omit from 'lodash/omit'
import * as firebase from 'firebase/proposals'

export const nextProposal = async (action, store, { router }) => {
  const eventId = router.getParam('eventId')
  const { proposalIndex } = store.ui.organizer.proposal.get()
  const proposalKeys = store.data.proposals.getKeys()
  const nextIndex = proposalIndex + 1
  if (nextIndex < proposalKeys.length) {
    const proposalId = proposalKeys[nextIndex]
    store.ui.organizer.proposal.set({ proposalIndex: nextIndex })
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
    router.push('vote-event-proposal-page', { eventId, proposalId })
  }
}

export const likeProposal = async (action, store, { router }) => {
  const { isLiked } = action.payload
  console.log('LIKE ?', isLiked);
  const { uid } = store.auth.get()
  const user = store.data.users.get(uid)
  const eventId = router.getParam('eventId')
  const proposalId = router.getParam('proposalId')
  const proposal = store.data.proposals.get(proposalId);
  let newLikes;

  // add or remove the rating in database and store
  if (isLiked) {
    newLikes = {...(proposal.likes || {}), [uid]: {displayName: user.displayName, photoURL: user.photoURL}};
  } else {
    newLikes = omit(proposal.likes, uid);
  }

  await firebase.updateProposal(eventId, {...proposal, likes: newLikes});
  store.data.proposals.update({ id: proposalId, likes: newLikes})
}
