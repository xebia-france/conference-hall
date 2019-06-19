import React from 'react'
import PropTypes from 'prop-types'

import { withSizes } from 'styles/utils'
import IconLabel from 'components/iconLabel'
import { List, ListItem } from 'components/list'
import ProposalSubtitle from './proposalSubtitle'
import { shuffle } from 'helpers/array'
import './proposalsList.css'


const Proposals = ({
  eventId, proposals, onSelect, isMobile, userId,
}) => (
  <List
    className="event-proposals"
    array={shuffle(proposals)}
    renderRow={proposal => {
      const isLiked = Object.keys(proposal.likes || {}).includes(userId)
      return (
        <ListItem
          key={proposal.id}
          title={proposal.title}
          subtitle={!isMobile && <ProposalSubtitle eventId={eventId} proposal={proposal} />}
          onSelect={() => onSelect(eventId, proposal.id)}
          renderActions={() => (
            isLiked && <IconLabel icon="fa fa-heart" label="Je veux ce slot !" right/>
          )}
        />
      );
    }}
  />
)

Proposals.propTypes = {
  eventId: PropTypes.string.isRequired,
  proposals: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  userId: PropTypes.string,
}

Proposals.defaultProps = {
  proposals: [],
}

export default withSizes(Proposals)
