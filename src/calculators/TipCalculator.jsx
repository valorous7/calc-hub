import React, { useState } from 'react'

export default function TipCalculator() {
  const [bill, setBill] = useState('')
  const [tipPercent, setTipPercent] = useState('')
  const [tip, setTip] = useState(null)

  const calculate = () => {
    if (!bill || !tipPercent) return
    const result = (bill * tipPercent) / 100
    setTip(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Bill Amount" value={bill}
        onChange={e => setBill(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Tip (%)" value={tipPercent}
        onChange={e => setTipPercent(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {tip && <p className="mt-3">Tip: ${tip}</p>}
    </div>
  )
}
