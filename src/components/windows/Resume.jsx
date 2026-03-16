import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = () => {
  return (
    <MacWindow>
        <div className="resume_window">
            <embed src="/resume.pdf" frameBorder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume
