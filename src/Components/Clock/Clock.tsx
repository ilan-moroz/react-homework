import { useEffect, useState } from 'react'
import './Clock.css'

function Clock(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  )

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div className="Clock">
      <h3>⏰ {currentTime} ⏰</h3>
    </div>
  )
}

export default Clock
