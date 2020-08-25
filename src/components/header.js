import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <svg
          className="back-btn"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      {/* <Link className="btn hire" to="/contact">
        Hire Me
      </Link> */}
    </nav>
  )
}

export default Header
