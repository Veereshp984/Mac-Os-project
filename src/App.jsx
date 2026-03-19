import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'


const App = () => {
   const [windowsState, setwindowsState] = useState({
     github: false,
     note: false,
     resume: false,
     spotify: false,
     cli: false
   })
   
   return (
     <main>
       <Nav />
       <Dock windowsState={windowsState} setwindowsState={setwindowsState} />
       {windowsState.github && <Github onClose={() => setwindowsState((state) => ({ ...state, github: false }))} />}
       {windowsState.note && <Note onClose={() => setwindowsState((state) => ({ ...state, note: false }))} />}
       {windowsState.resume && <Resume onClose={() => setwindowsState((state) => ({ ...state, resume: false }))} />}
       {windowsState.spotify && <Spotify onClose={() => setwindowsState((state) => ({ ...state, spotify: false }))} />}
       {windowsState.cli && <Cli onClose={() => setwindowsState((state) => ({ ...state, cli: false }))} />}
     </main>
   )
}

export default App
