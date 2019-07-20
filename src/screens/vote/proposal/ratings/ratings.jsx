import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconLabel from 'components/iconLabel'
import Button from 'components/button'
import { LoadingIndicator } from 'components/loader'
import Like from 'components/like'
import './ratings.css'

const Ratings = ({
  isLoaded,
  isLiked,
  onLiking,
  hasNext,
  hasPrevious,
  onNext,
  onPrevious,
  className,
}) => (
  <div className={cn(className, 'proposal-ratings-layout card')}>
    <Button tertiary className="btn-previous" disabled={!hasPrevious} onClick={onPrevious}>
      <IconLabel icon="fa fa-angle-left" label="Previous" />
    </Button>
    <div className="btn-ratings">
      {!isLoaded && <LoadingIndicator />}
      {isLoaded && <Like onLiking={() => onLiking(!isLiked)} isLiked={isLiked} />}
    </div>
    <Button tertiary className="btn-next" disabled={!hasNext} onClick={onNext}>
      <IconLabel icon="fa fa-angle-right" label="Next" right />
    </Button>
  </div>
)

Ratings.propTypes = {
  isLoaded: PropTypes.bool,
  isLiked: PropTypes.bool,
  onLiking: PropTypes.func.isRequired,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Ratings.defaultProps = {
  isLoaded: false,
  isLiked: false,
  hasNext: false,
  hasPrevious: false,
  className: undefined,
}

export default Ratings
