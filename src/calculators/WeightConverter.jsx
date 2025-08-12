import React, { useState } from 'react'

export default function WeightConverter() {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('kg-to-lb')
  const [result, setResult] = useState(null)

  const convert = () => {
    if (value === '') return
    let converted
    switch (unit) {
      case 'kg-to-lb': converted = value * 2.20462; break
      case 'lb-to-kg': converted = value / 2.20462; break
      case 'g-to-oz': converted = value * 0.035274; break
      case 'oz-to-g': converted = value / 0.035274; break
      default: converted = value
    }
    setResult(converted.toFixed(3))
  }

  return (
    <div>
      <input type="number" placeholder="Weight" value={value}
        onChange={e => setValue(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <select value={unit} onChange={e => setUnit(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="kg-to-lb">Kilograms to Pounds</option>
        <option value="lb-to-kg">Pounds to Kilograms</option>
        <option value="g-to-oz">Grams to Ounces</option>
        <option value="oz-to-g">Ounces to Grams</option>
      </select>
      <button onClick={convert} className="bg-blue-500 text-white px-4 py-2 rounded">Convert</button>
      {result !== null && <p className="mt-3">Result: {result}</p>}
    </div>
  )
}
