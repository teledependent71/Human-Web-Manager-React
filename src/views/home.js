import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Web Manager</title>
        <meta property="og:title" content="Human Web Manager" />
      </Helmet>
    </div>
  )
}

export default Home
