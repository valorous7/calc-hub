import React, { useState } from 'react'

export default function BMR() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [bmr, setBmr] = useState(null)

  const calculateBMR = () => {
    if (!weight || !height || !age) return
    let result
    if (gender === 'male') {
      result = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    } else {
      result = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    }
    setBmr(result.toFixed(2))
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
      <input type="number" placeholder="Age" value={age}
        onChange={e => setAge(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <select value={gender} onChange={e => setGender(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateBMR} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {bmr && <p className="mt-3">BMR: {bmr} kcal/day</p>}
    </div>
  )
}
