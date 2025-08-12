import React, { useState } from 'react'

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [times, setTimes] = useState('')
  const [years, setYears] = useState('')
  const [amount, setAmount] = useState(null)

  const calculate = () => {
    if (!principal || !rate || !times || !years) return
    const result = principal * Math.pow((1 + (rate / 100) / times), times * years)
    setAmount(result.toFixed(2))
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
      <input type="number" placeholder="Times Compounded/Year" value={times}
        onChange={e => setTimes(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Years" value={years}
        onChange={e => setYears(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {amount && <p className="mt-3">Future Value: ${amount}</p>}
    </div>
  )
}
