import React from 'react'
import { Link, forRoute } from '@k-redux-router/react-k-ramel'

import './home.css'

const Home = () => (
  <div className="home">
    <Link code="vote-event-proposals" eventId="eOlXza98MufDjio43ulH" className="home-link">
      <i className="fa fa-heart" />
      <span>Je vote</span>
    </Link>
    <Link code="speaker" className="home-link">
      <i className="fa fa-microphone" />
      <span>Je speake</span>
    </Link>
    <Link code="organizer" className="home-link">
      <i className="fa fa-rocket" />
      <span>J'organise</span>
    </Link>
  </div>
)

export default forRoute.absolute('home')(Home)
