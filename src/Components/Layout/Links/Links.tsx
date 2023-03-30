import { NavLink } from 'react-router-dom'
import RandomProduct from '../../RandomProduct/RandomProduct'
import './Links.css'

function Links(): JSX.Element {
  return (
    <div className="Links">
      <br /> <br />
      <NavLink to="/">Main</NavLink>
      <br />
      <br />
      <NavLink to="/adidas">Adidas</NavLink>
      <br />
      <br />
      <NavLink to="/nike">Nike</NavLink>
      <br />
      <br />
      <NavLink to="/vans">Vans</NavLink>
      <br />
      <br />
      <NavLink to="/rebook">Rebook</NavLink>
      <br />
      <br />
      <NavLink to="/CityStreets">City & Streets</NavLink>
      <RandomProduct />
    </div>
  )
}

export default Links
