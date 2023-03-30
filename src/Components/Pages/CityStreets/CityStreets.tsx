import axios from 'axios'
import { useState, useEffect, SyntheticEvent } from 'react'
import './CityStreets.css'

function CityStreets(): JSX.Element {
  const [citiesArr, setCitiesArr] = useState<any[]>([])
  const [city, setCity] = useState(' ')
  const [streetsArr, setStreetsArr] = useState<any[]>([])

  const citiesUrl =
    'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=5000'
  const streetUrl =
    'https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=6000&q='

  useEffect(() => {
    const getCities = async () => {
      const cityData = (await axios.get(citiesUrl)).data.result.records
      setCitiesArr(cityData)
    }
    getCities()
  }, [])

  let cityName = ''
  const getStreets = async (args: SyntheticEvent) => {
    cityName = (args.target as HTMLInputElement).value
    console.log(cityName)
    const streetsData = await (await axios.get(streetUrl + cityName)).data
      .result.records
    // console.log(streetsData)
    setStreetsArr(streetsData)
  }

  return (
    <div className="CityStreets">
      <select defaultValue="choose" onChange={getStreets}>
        <option disabled value="choose">
          Choose a City
        </option>
        {citiesArr.map((city) => (
          <option key={city._id} value={city.שם_ישוב}>
            {city.שם_ישוב}
          </option>
        ))}
      </select>
      <br />
      <br />
      {cityName}
      <br />
      <br />
      <select defaultValue="street">
        <option disabled value="street">
          List Of Streets
        </option>
        {streetsArr.map((street) => (
          <option key={street._id} value={street.שם_רחוב}>
            {street.שם_רחוב}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CityStreets
