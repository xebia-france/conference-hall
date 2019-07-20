import React from 'react'
import PropTypes from 'prop-types'

import Talk from './talk'
import Ratings from './ratings'

import './proposal.css'

const Proposal = ({ eventId, proposal }) => (
  <div className="proposalLike">
    <Ratings className="proposalLike-ratings" eventId={eventId} proposal={proposal} />
    <Talk className="proposalLike-talk" eventId={eventId} proposal={proposal} />
  </div>
)

Proposal.propTypes = {
  eventId: PropTypes.string.isRequired,
  proposal: PropTypes.objectOf(PropTypes.any),
}

Proposal.defaultProps = {
  proposal: {},
}

export default Proposal
