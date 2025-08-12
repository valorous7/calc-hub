import React, { useState } from 'react'

export default function SpeedCalculator() {
  const [distance, setDistance] = useState('')
  const [time, setTime] = useState('')
  const [speed, setSpeed] = useState(null)

  const calculate = () => {
    if (!distance || !time) return
    const result = distance / time
    setSpeed(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Distance (km)" value={distance}
        onChange={e => setDistance(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Time (h)" value={time}
        onChange={e => setTime(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {speed !== null && <p className="mt-3">Speed: {speed} km/h</p>}
    </div>
  )
}
