import React, { useState } from 'react'

export default function LoanCalculator() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [payment, setPayment] = useState(null)

  const calculateLoan = () => {
    if (!amount || !rate || !years) return
    const monthlyRate = rate / 100 / 12
    const n = years * 12
    const result = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))
    setPayment(result.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Loan Amount" value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Interest Rate (%)" value={rate}
        onChange={e => setRate(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Years" value={years}
        onChange={e => setYears(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculateLoan} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {payment && <p className="mt-3">Monthly Payment: ${payment}</p>}
    </div>
  )
}
