import React, { useState } from 'react'

export default function DateDifference() {
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [days, setDays] = useState(null)

  const calculate = () => {
    if (!date1 || !date2) return
    const diff = Math.abs(new Date(date2) - new Date(date1))
    const result = diff / (1000 * 60 * 60 * 24)
    setDays(result)
  }

  return (
    <div>
      <input type="date" value={date1} onChange={e => setDate1(e.target.value)} className="border p-2 mr-2 rounded"/>
      <input type="date" value={date2} onChange={e => setDate2(e.target.value)} className="border p-2 mr-2 rounded"/>
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {days !== null && <p className="mt-3">Difference: {days} days</p>}
    </div>
  )
}
