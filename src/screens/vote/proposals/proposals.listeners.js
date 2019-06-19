import { when } from 'k-ramel'

import * as reactions from './proposals.reactions'

export default [
  when('@@ui/ON_LOAD_EVENT_PROPOSALS')(reactions.loadProposals),
  when('@@ui/ON_SELECT_PROPOSAL')(reactions.selectProposal),
]
