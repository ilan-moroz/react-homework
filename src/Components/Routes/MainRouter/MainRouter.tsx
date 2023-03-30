import { Route, Routes } from 'react-router-dom'
import YouTube from '../../Layout/Home/YouTube/YouTube'
import Adidas from '../../Pages/Adidas/Adidas'
import CityStreets from '../../Pages/CityStreets/CityStreets'
import Error from '../../Pages/Error/Error'
import Nike from '../../Pages/Nike/Nike'
import Rebook from '../../Pages/Rebook/Rebook'
import Vans from '../../Pages/Vans/Vans'

function MainRouter(): JSX.Element {
  return (
    <div className="MainRouter">
      <Routes>
        <Route path="/nike" element={<Nike />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/rebook" element={<Rebook />} />
        <Route path="/citystreets" element={<CityStreets />} />
        <Route path="/" element={<YouTube />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default MainRouter
