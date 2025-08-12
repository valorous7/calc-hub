import React, { useState } from 'react'

export default function PercentageOf() {
  const [part, setPart] = useState('')
  const [whole, setWhole] = useState('')
  const [percent, setPercent] = useState(null)

  const calculate = () => {
    if (!part || !whole) return
    const result = (part / whole) * 100
    setPercent(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Part" value={part}
        onChange={e => setPart(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Whole" value={whole}
        onChange={e => setWhole(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {percent !== null && <p className="mt-3">{part} is {percent}% of {whole}</p>}
    </div>
  )
}
