import React, { useState } from 'react'

export default function PercentChange() {
  const [oldValue, setOldValue] = useState('')
  const [newValue, setNewValue] = useState('')
  const [change, setChange] = useState(null)

  const calculate = () => {
    if (!oldValue || !newValue) return
    const result = ((newValue - oldValue) / oldValue) * 100
    setChange(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Old Value" value={oldValue}
        onChange={e => setOldValue(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="New Value" value={newValue}
        onChange={e => setNewValue(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {change !== null && <p className="mt-3">Change: {change}%</p>}
    </div>
  )
}
