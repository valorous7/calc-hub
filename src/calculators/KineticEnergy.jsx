import React, { useState } from 'react'

export default function KineticEnergy() {
  const [mass, setMass] = useState('')
  const [velocity, setVelocity] = useState('')
  const [energy, setEnergy] = useState(null)

  const calculate = () => {
    if (!mass || !velocity) return
    const result = 0.5 * mass * Math.pow(velocity, 2)
    setEnergy(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Mass (kg)" value={mass}
        onChange={e => setMass(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Velocity (m/s)" value={velocity}
        onChange={e => setVelocity(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {energy !== null && <p className="mt-3">Kinetic Energy: {energy} J</p>}
    </div>
  )
}
