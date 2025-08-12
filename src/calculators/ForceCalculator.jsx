import React, { useState } from 'react'

export default function ForceCalculator() {
  const [mass, setMass] = useState('')
  const [acceleration, setAcceleration] = useState('')
  const [force, setForce] = useState(null)

  const calculate = () => {
    if (!mass || !acceleration) return
    setForce((mass * acceleration).toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Mass (kg)" value={mass}
        onChange={e => setMass(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Acceleration (m/s²)" value={acceleration}
        onChange={e => setAcceleration(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {force !== null && <p className="mt-3">Force: {force} N</p>}
    </div>
  )
}
