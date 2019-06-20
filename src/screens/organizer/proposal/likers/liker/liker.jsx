import React from 'react'
import PropTypes from 'prop-types'

import UserAvatar from 'screens/components/userAvatar'

import styles from './liker.module.css'

const Liker = ({
  uid, 
}) => {
  return (
    <div>
      <UserAvatar id={uid} className={styles.avatar} />
    </div>
  )
}

Liker.propTypes = {
  uid: PropTypes.string.isRequired,
}

export default Liker
