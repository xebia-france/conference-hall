import { when } from 'k-ramel'

import * as reactions from './proposals.reactions'
import * as events from '../../../store/reactions/events'

export default [
  when('@@ui/ON_LOAD_EVENT_PROPOSALS')(reactions.loadProposals),
  when('@@ui/ON_SELECT_PROPOSAL')(reactions.selectProposal),
  when('@@ui/ON_LOAD_EVENT_FOR_VOTE')(reactions.fetchEvent),
]
