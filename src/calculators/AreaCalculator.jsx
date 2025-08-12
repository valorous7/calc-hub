import React, { useState } from 'react'

export default function AreaCalculator() {
  const [shape, setShape] = useState('rectangle')
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [area, setArea] = useState(null)

  const calculate = () => {
    if (val1 === '' || (shape !== 'circle' && val2 === '')) return
    let result
    switch (shape) {
      case 'rectangle': result = val1 * val2; break
      case 'triangle': result = (val1 * val2) / 2; break
      case 'circle': result = Math.PI * Math.pow(val1, 2); break
      default: result = 0
    }
    setArea(result.toFixed(2))
  }

  return (
    <div>
      <select value={shape} onChange={e => setShape(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="rectangle">Rectangle (L×W)</option>
        <option value="triangle">Triangle (B×H/2)</option>
        <option value="circle">Circle (πr²)</option>
      </select>
      <input type="number" placeholder={shape === 'circle' ? "Radius" : "Length/Base"} value={val1}
        onChange={e => setVal1(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      {shape !== 'circle' && (
        <input type="number" placeholder={shape === 'rectangle' ? "Width" : "Height"} value={val2}
          onChange={e => setVal2(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
      )}
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {area !== null && <p className="mt-3">Area: {area}</p>}
    </div>
  )
}
