import React, { useState } from 'react'

export default function LengthConverter() {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('m-to-ft')
  const [result, setResult] = useState(null)

  const convert = () => {
    if (value === '') return
    let converted
    switch (unit) {
      case 'm-to-ft': converted = value * 3.28084; break
      case 'ft-to-m': converted = value / 3.28084; break
      case 'km-to-mi': converted = value * 0.621371; break
      case 'mi-to-km': converted = value / 0.621371; break
      default: converted = value
    }
    setResult(converted.toFixed(3))
  }

  return (
    <div>
      <input type="number" placeholder="Length" value={value}
        onChange={e => setValue(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <select value={unit} onChange={e => setUnit(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="m-to-ft">Meters to Feet</option>
        <option value="ft-to-m">Feet to Meters</option>
        <option value="km-to-mi">Kilometers to Miles</option>
        <option value="mi-to-km">Miles to Kilometers</option>
      </select>
      <button onClick={convert} className="bg-blue-500 text-white px-4 py-2 rounded">Convert</button>
      {result !== null && <p className="mt-3">Result: {result}</p>}
    </div>
  )
}
