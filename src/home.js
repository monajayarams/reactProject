import * as React from 'react'
import './styles.scss'
export default function Home() {
  return (
    <div className="home">
      <div className="video">
      <iframe title="demo-description" width="750" height="400" src="https://www.youtube.com/embed/hwgG9DVbB7g" frameBorder="0" gesture="media" allow="autoplay; encrypted-media;" allowFullScreen></iframe>
      </div>
    </div>
  )
}