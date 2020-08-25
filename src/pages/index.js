import React from "react"
import Helmet from "react-helmet"
import Landing from "../components/landing"

import "../styles/styles.css"

const IndexPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Chris Cosentino</title>
      </Helmet>
      <Landing />
    </div>
  )
}

export default IndexPage
