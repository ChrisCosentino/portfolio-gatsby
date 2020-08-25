import React from "react"
import Helmet from "react-helmet"
import Landing from "../components/landing"

import "../styles/styles.css"

const IndexPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Chris Cosentino</title>
        <meta name="title" content="Chris Cosentino" />
        <meta
          name="description"
          content="Chris Cosentino's project portfolio website. A Software Developer."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thecosentino.com/" />
        <meta property="og:title" content="Chris Cosentino" />
        <meta
          property="og:description"
          content="Chris Cosentino's project portfolio website. A Software Developer."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.thecosentino.com/" />
        <meta property="twitter:title" content="Chris Cosentino" />
        <meta
          property="twitter:description"
          content="Chris Cosentino's project portfolio website. A Software Developer."
        />
        <meta property="twitter:image" content="" />
      </Helmet>
      <Landing />
    </div>
  )
}

export default IndexPage
