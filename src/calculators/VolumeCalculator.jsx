import React, { useState } from 'react'

export default function VolumeCalculator() {
  const [shape, setShape] = useState('cube')
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('')
  const [volume, setVolume] = useState(null)

  const calculate = () => {
    if (val1 === '') return
    let result
    switch (shape) {
      case 'cube': result = Math.pow(val1, 3); break
      case 'cuboid': result = val1 * val2 * val3; break
      case 'sphere': result = (4/3) * Math.PI * Math.pow(val1, 3); break
      default: result = 0
    }
    setVolume(result.toFixed(2))
  }

  return (
    <div>
      <select value={shape} onChange={e => setShape(e.target.value)} className="border p-2 mr-2 rounded">
        <option value="cube">Cube</option>
        <option value="cuboid">Cuboid</option>
        <option value="sphere">Sphere</option>
      </select>
      <input type="number" placeholder={shape === 'cuboid' ? "Length" : "Side/Radius"} value={val1}
        onChange={e => setVal1(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      {shape === 'cuboid' && (
        <>
          <input type="number" placeholder="Width" value={val2}
            onChange={e => setVal2(e.target.value)}
            className="border p-2 mr-2 rounded"
          />
          <input type="number" placeholder="Height" value={val3}
            onChange={e => setVal3(e.target.value)}
            className="border p-2 mr-2 rounded"
          />
        </>
      )}
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {volume !== null && <p className="mt-3">Volume: {volume}</p>}
    </div>
  )
}
