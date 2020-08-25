import React from "react"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="chat">Wanna Chat?</div>
        <div className="contact">
          <p>Email me:</p>{" "}
          <a
            className="contact-link email"
            href="mailto:chriscosentino@hotmail.com"
          >
            chriscosentino@hotmail.com
          </a>
        </div>
        <div className="contact">
          <p>Call me:</p>{" "}
          <a className="contact-link phone" href="tel:6475739992">
            647 573 9992
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
