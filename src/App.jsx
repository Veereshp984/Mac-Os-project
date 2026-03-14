import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/github'
import Note from './components/windows/note'
import Resume from './components/windows/Resume'
const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Note/>
      <Resume/>
     <Github/>
    </main>
  )
}

export default App
