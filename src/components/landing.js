import React from "react"

import { Link } from "gatsby"

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="meta">
        Hi, I'm Chris{" "}
        <a
          href="https://www.linkedin.com/in/chriscosentino98/"
          target="_blank"
          rel="noopener norefferer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#2867B2"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>{" "}
      </div>
      <div className="large">Software Developer</div>
      <div className="links-section">
        <Link className="btn projects" to="/projects">
          Projects
        </Link>
        <a
          className="btn github"
          href="https://github.com/ChrisCosentino"
          target="_blank"
          rel="noopener norefferer"
        >
          Github
        </a>
        <a
          className="btn resume"
          href="https://drive.google.com/file/d/1lCRE6rYkfujPMnmIkB_svipAcbss6Lfo/view?usp=sharing"
          target="_blank"
          rel="noopener norefferer"
        >
          Resume
        </a>
        <Link className="btn hire" to="/contact">
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default Landing
