import React, { useState } from 'react'

export default function SplitBill() {
  const [total, setTotal] = useState('')
  const [people, setPeople] = useState('')
  const [amount, setAmount] = useState(null)

  const calculate = () => {
    if (!total || !people) return
    const result = total / people
    setAmount(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Total Bill" value={total}
        onChange={e => setTotal(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Number of People" value={people}
        onChange={e => setPeople(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Split</button>
      {amount && <p className="mt-3">Each person pays: ${amount}</p>}
    </div>
  )
}
