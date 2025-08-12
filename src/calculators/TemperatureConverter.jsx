import React, { useState } from 'react'

export default function TemperatureConverter() {
  const [temp, setTemp] = useState('')
  const [scale, setScale] = useState('CtoF')
  const [result, setResult] = useState(null)

  const convert = () => {
    if (temp === '') return
    let converted
    if (scale === 'CtoF') {
      converted = (temp * 9/5) + 32
    } else {
      converted = (temp - 32) * 5/9
    }
    setResult(converted.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Temperature" value={temp}
        onChange={e => setTemp(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <select value={scale} onChange={e => setScale(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="CtoF">Celsius to Fahrenheit</option>
        <option value="FtoC">Fahrenheit to Celsius</option>
      </select>
      <button onClick={convert} className="bg-blue-500 text-white px-4 py-2 rounded">Convert</button>
      {result !== null && <p className="mt-3">Result: {result}°</p>}
    </div>
  )
}
