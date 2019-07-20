import { when } from 'k-ramel'

import * as reactions from './proposal.reactions'

export default [
  when('@@ui/ON_NEXT_VOTE_PROPOSAL')(reactions.nextProposal),
  when('@@ui/ON_PREVIOUS_VOTE_PROPOSAL')(reactions.previousProposal),
  when('@@ui/LIKE_PROPOSAL')(reactions.likeProposal),
]
