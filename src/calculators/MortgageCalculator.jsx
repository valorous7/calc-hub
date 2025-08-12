import React, { useState } from 'react'

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [years, setYears] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState(null)

  const calculate = () => {
    if (!loanAmount || !interestRate || !years) return
    const monthlyRate = (interestRate / 100) / 12
    const n = years * 12
    const payment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -n))
    setMonthlyPayment(payment.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Loan Amount" value={loanAmount}
        onChange={e => setLoanAmount(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Interest Rate (%)" value={interestRate}
        onChange={e => setInterestRate(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Years" value={years}
        onChange={e => setYears(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {monthlyPayment !== null && <p className="mt-3">Monthly Payment: ${monthlyPayment}</p>}
    </div>
  )
}
