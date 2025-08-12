import React, { useState } from 'react'

export default function SimpleInterest() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [interest, setInterest] = useState(null)

  const calculate = () => {
    if (!principal || !rate || !time) return
    const result = (principal * rate * time) / 100
    setInterest(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Principal" value={principal}
        onChange={e => setPrincipal(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Rate (%)" value={rate}
        onChange={e => setRate(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Time (years)" value={time}
        onChange={e => setTime(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {interest && <p className="mt-3">Simple Interest: ${interest}</p>}
    </div>
  )
}
