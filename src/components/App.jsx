import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './ Navbar'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import TeamPage from './TeamPage'
import Player from './Player'

export default function App () {
  return (
    <Router>

      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Players />}>
            <Route path=':playerId' element={<Player/>}/>
          </Route>
          <Route path='/teams' element={<Teams />} />
          <Route path='/:teamId' element = {<TeamPage />}/>
        </Routes>

      </div>
    </Router>
  )
}