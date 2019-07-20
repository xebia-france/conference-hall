import React from 'react'
import PropTypes from 'prop-types'

import { displayRating } from 'helpers/number'
import IconLabel from 'components/iconLabel'
import './rating.css'

const Rating = ({
  rating, loves, hates, noopinion, nbvotes, nbLikes,
}) => (
  <div className="rating-display">
  {rating
    ? (
      <>
      <div className="rating-display-rate">{displayRating(rating)}</div>
      <div className="rating-display-feelings">
        <IconLabel icon="fa fa-ban" label={noopinion} right className="noopinion" />
        <IconLabel icon="fa fa-circle" label={hates} right className="hates" />
        <IconLabel icon="fa fa-heart" label={loves} right className="loves" />
        <IconLabel icon="fa fa-users" label={nbvotes} right className="votes" />
      </div>
      </>
    )
    : <IconLabel icon="fa fa-heart" label={nbLikes} right className="likes" />
  }
  </div>
)

Rating.propTypes = {
  rating: PropTypes.number,
  loves: PropTypes.number,
  hates: PropTypes.number,
  noopinion: PropTypes.number,
  nbvotes: PropTypes.number,
  nbLikes: PropTypes.number,
}

Rating.defaultProps = {
  rating: undefined,
  loves: undefined,
  hates: undefined,
  noopinion: undefined,
  nbvotes: undefined,
  nbLikes: undefined,
}

export default Rating
