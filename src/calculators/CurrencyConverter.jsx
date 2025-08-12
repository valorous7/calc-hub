import React, { useState, useEffect } from 'react'

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [rate, setRate] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    // For demo purposes: fixed rates
    const rates = {
      USD: { EUR: 0.9, GBP: 0.78, JPY: 142 },
      EUR: { USD: 1.11, GBP: 0.86, JPY: 158 },
      GBP: { USD: 1.28, EUR: 1.16, JPY: 183 }
    }
    setRate(rates[from]?.[to] || 1)
  }, [from, to])

  const convert = () => {
    if (!amount || !rate) return
    setResult((amount * rate).toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Amount" value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <select value={from} onChange={e => setFrom(e.target.value)} className="border p-2 mr-2 rounded">
        <option>USD</option><option>EUR</option><option>GBP</option>
      </select>
      <select value={to} onChange={e => setTo(e.target.value)} className="border p-2 mr-2 rounded">
        <option>USD</option><option>EUR</option><option>GBP</option>
      </select>
      <button onClick={convert} className="bg-blue-500 text-white px-4 py-2 rounded">Convert</button>
      {result !== null && <p className="mt-3">Converted: {result} {to}</p>}
    </div>
  )
}
