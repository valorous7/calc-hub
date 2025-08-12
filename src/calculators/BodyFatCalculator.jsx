import React, { useState } from 'react'

export default function BodyFatCalculator() {
  const [waist, setWaist] = useState('')
  const [neck, setNeck] = useState('')
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('male')
  const [bodyFat, setBodyFat] = useState(null)

  const calculate = () => {
    if (!waist || !neck || !height) return
    let bf
    if (gender === 'male') {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
    } else {
      bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + neck) + 0.22100 * Math.log10(height)) - 450
    }
    setBodyFat(bf.toFixed(2))
  }

  return (
    <div>
      <select value={gender} onChange={e => setGender(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="number" placeholder="Waist (cm)" value={waist}
        onChange={e => setWaist(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Neck (cm)" value={neck}
        onChange={e => setNeck(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Height (cm)" value={height}
        onChange={e => setHeight(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {bodyFat !== null && <p className="mt-3">Body Fat: {bodyFat}%</p>}
    </div>
  )
}
