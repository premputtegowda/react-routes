import TeamLogo from './TeamLogo'
import useTeamNames from '../hooks/useTeamNames'
import { Link } from 'react-router-dom'
import Loading from './Loading'

export default function Home() {
    const {loading,  response: teamNames} = useTeamNames();
    
    
    
    return (
        <div className='container'>
        <h1 className='large-header'>
      
          Select a team
        </h1>
        <div className='home-grid'>
          {loading === true
            ? <Loading />
            : teamNames.map((id) => (
              <Link key={id} to={`/${id}`}>
                <TeamLogo id={id} width='125px' />
              </Link>
            ))}
        </div>
      </div>

     )
}