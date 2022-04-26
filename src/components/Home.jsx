import TeamLogo from './TeamLogo'
import useTeamNames from '../hooks/useTeamNames'
import { Link } from 'react-router-dom'

export default function Home() {
    const {loading,  response: teamNames} = useTeamNames()
    
    
    if (loading) return null
    return (
      

        <div className='container'>
            <h1 className='large-header'>
                Hash History Basketball League
            </h1>
            <h3 className='header text-center'>
                 Select a team
            </h3>

            { teamNames.map((id)=>(
                <Link key={id} to={`/${id}`}>
                    <TeamLogo id={id} width='125px' />
                </Link>

            ))

            }
      
    </div>)
}