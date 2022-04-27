 import { Link, useLocation } from 'react-router-dom'


// function customMenu({children, to}){
//     const location = useLocation()
//     const match = location.path === path

//     return (
//         <div className= {match ? 'active':''}>
//         {match ? '>':''}
//         <Link to = {to}>
//             {children}
//         </Link>
//         </div>
//     )
// }
export default function Navbar () {
    return (

      
        <div className='container navbar'>
        <Link to='/'>Home</Link>
        <nav className='nav-links'>
          <Link to='/players'>Players</Link>
          <Link to='/teams'>Teams</Link>
        </nav>
      </div>
    )
}