import React from "react"
import Header from "../components/header"

import JSONData from "../../content/My-JSON-Content.json"

const ProjectsPage = () => {
  return (
    <div>
      <Header />
      <div className="container projects-container">
        <div className="section-title">Projects</div>
        <div className="projects-section">
          {JSONData.content.map((data, index) => {
            return (
              <div className="project" key={index}>
                <img className="project-logo" src={data.img} alt="" />
                <div className="project-name">{data.name}</div>
                <div className="project-desc">{data.desc}</div>
                <div className="badge-list">
                  {data.tools.map((item, i) => (
                    <div className="badge" key={i}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    className="project-link btn link"
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Project
                  </a>
                  <a
                    className="project-link btn github"
                    href={data.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Github
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
