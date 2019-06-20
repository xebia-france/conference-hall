/* eslint-disable prefer-destructuring */
import { inject } from '@k-ramel/react'

import Ratings from './ratings'

const mapStore = (store, props, {router}) => {
  const { uid } = store.auth.get()
  const proposals = store.data.proposals.getKeys()
  const { proposalIndex } = store.ui.organizer.proposal.get()
  const proposalId = router.getParam('proposalId');
  const proposal = store.data.proposals.get(proposalId);
  return {
    isLiked: proposal.likes && (proposal.likes || []).includes(uid),
    isLoaded: store.data.ratings.isInitialized(),
    ...store.data.ratings.get(uid),
    hasNext: proposalIndex + 1 < proposals.length,
    hasPrevious: proposalIndex - 1 >= 0,
    onLiking: isLiked => {
      store.dispatch({ type: '@@ui/LIKE_PROPOSAL', payload: { isLiked } })
    },
    onNext: () => store.dispatch('@@ui/ON_NEXT_VOTE_PROPOSAL'),
    onPrevious: () => store.dispatch('@@ui/ON_PREVIOUS_VOTE_PROPOSAL'),
  }
}

export default inject(mapStore)(Ratings)
