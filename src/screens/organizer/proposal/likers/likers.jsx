import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Liker from './liker'

const Likers = ({ proposal, className }) => (
  <div className={cn(className, 'card')}>
  <h2>Ils ont liké ({(proposal.likes || []).length})</h2>
    {(proposal.likes || []).map(uid => <Liker key={uid} uid={uid} />)}
  </div>
)

Likers.propTypes = {
  proposal: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
}

Likers.defaultProps = {
  proposal: {},
  className: undefined,
}

export default Likers
