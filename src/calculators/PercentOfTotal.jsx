import React, { useState } from 'react'

export default function PercentOfTotal() {
  const [part, setPart] = useState('')
  const [total, setTotal] = useState('')
  const [percent, setPercent] = useState(null)

  const calculate = () => {
    if (!part || !total) return
    setPercent(((part / total) * 100).toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Part" value={part}
        onChange={e => setPart(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Total" value={total}
        onChange={e => setTotal(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {percent !== null && <p className="mt-3">{percent}% of total</p>}
    </div>
  )
}
