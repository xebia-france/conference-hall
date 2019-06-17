import React from 'react'
import PropTypes from 'prop-types'

import { withSizes } from 'styles/utils'
import Button from 'components/button'
import IconLabel from 'components/iconLabel'
import { List, ListItem } from 'components/list'
import ProposalSubtitle from './proposalSubtitle'
import { shuffle } from 'helpers/array'
import './proposalsList.css'

const show = e => {console.log('COUCOU', e); e.stopPropagation()};

const Proposals = ({
  eventId, proposals, onSelect, isMobile,
}) => (
  <List
    className="event-proposals"
    array={shuffle(proposals)}
    renderRow={proposal => (
      <ListItem
        key={proposal.id}
        title={proposal.title}
        subtitle={!isMobile && <ProposalSubtitle eventId={eventId} proposal={proposal} />}
        onSelect={() => onSelect(eventId, proposal.id)}
        renderActions={() => (
          <Button onClick={show} tertiary size="large">
            <IconLabel icon={`fa ${proposal.isLiked ? 'fa-heart' : 'fa-heart-o'}`} label=" "/>
          </Button>
        )}
      />
    )}
  />
)

Proposals.propTypes = {
  eventId: PropTypes.string.isRequired,
  proposals: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

Proposals.defaultProps = {
  proposals: [],
}

export default withSizes(Proposals)
