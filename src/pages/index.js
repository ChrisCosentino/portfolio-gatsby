import React, { useEffect } from "react"
import Helmet from "react-helmet"
// import firebase from "gatsby-plugin-firebase"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Landing from "../components/landing"

import "../styles/styles.css"

const IndexPage = () => {
  // useFirebase(firebase => {
  //   firebase.analytics().logEvent("visited_home")
  // }, [])
  // useEffect(() => {
  //   firebase.analytics()
  // }, [])

  useEffect(() => {
    trackCustomEvent({
      category: "Visited",
      action: "Viewed",
      label: "Viewed home page",
    })
  }, [])

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
