import React from 'react'
import PropTypes from 'prop-types'

import Titlebar from 'components/titlebar'
import ProposalsList from './proposalsList'
import ProposalsCards from './proposalsCards'

const Proposals = ({ eventId, nbProposals }) => {
  const title = nbProposals > 0 ? `Proposals (${nbProposals})` : 'Proposals'
  return (
    <div>
      <Titlebar icon="fa fa-paper-plane" title={title} className="no-print" />
      <ProposalsList eventId={eventId} />
      <ProposalsCards eventId={eventId} />
    </div>
  )
}

Proposals.propTypes = {
  eventId: PropTypes.string.isRequired,
  nbProposals: PropTypes.number.isRequired,
}

export default Proposals
