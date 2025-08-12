import React, { useState } from 'react'

export default function BMI() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  const calculateBMI = () => {
    if (!weight || !height) return
    const heightMeters = height / 100
    const result = (weight / (heightMeters * heightMeters)).toFixed(2)
    setBmi(result)
  }

  return (
    <div>
      <input type="number" placeholder="Weight (kg)" value={weight}
        onChange={e => setWeight(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Height (cm)" value={height}
        onChange={e => setHeight(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculateBMI} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {bmi && <p className="mt-3">BMI: {bmi}</p>}
    </div>
  )
}
