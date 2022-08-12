import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <Link style={{textDecoration: 'none', color: 'black', marginRight: 15}} to="/">Кейс</Link>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/inventory">Инвентарь</Link>
    </div>
  )
}

export default NavBar