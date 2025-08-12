import React, { useState } from 'react'

export default function CalorieBurnCalculator() {
  const [weight, setWeight] = useState('')
  const [minutes, setMinutes] = useState('')
  const [activity, setActivity] = useState('running')
  const [calories, setCalories] = useState(null)

  const MET_VALUES = {
    running: 9.8,
    walking: 3.8,
    cycling: 7.5,
    swimming: 8.0
  }

  const calculate = () => {
    if (!weight || !minutes) return
    const met = MET_VALUES[activity]
    const result = (met * weight * (minutes / 60))
    setCalories(result.toFixed(2))
  }

  return (
    <div>
      <select value={activity} onChange={e => setActivity(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="running">Running</option>
        <option value="walking">Walking</option>
        <option value="cycling">Cycling</option>
        <option value="swimming">Swimming</option>
      </select>
      <input type="number" placeholder="Weight (kg)" value={weight}
        onChange={e => setWeight(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Minutes" value={minutes}
        onChange={e => setMinutes(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {calories !== null && <p className="mt-3">Calories Burned: {calories}</p>}
    </div>
  )
}
