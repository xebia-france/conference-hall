import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './like.css'

class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLiked: this.props.isLiked
    }
  }

  componentWillReceiveProps({ isLiked }) {
    if (this.props.isLiked !== isLiked) {
      this.setState(() => ({
        isLiked,
      }))
    }
  }

  handleClick = () => {
    this.setState(oldState => ({ isLiked: !oldState }), () => {
      this.props.onLiking(this.state.isLiked)
    })
  }

  render() {
    const { className } = this.props
    const {
      isLiked
    } = this.state

    return (
      <div className={cn('like', className)}>
        <i
          className={cn('fa fa-2x', {
            'fa-heart-o': !isLiked,
            'fa-heart like-isLiked bounce': isLiked
          })}
          onClick={this.handleClick}
          role="button"
        />
      </div>
    )
  }
}

Like.propTypes = {
  isLiked: PropTypes.bool,
  onLiking: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Like.defaultProps = {
  isLiked: undefined,
  className: undefined,
}

export default Like
