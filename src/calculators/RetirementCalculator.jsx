import React, { useState } from 'react'

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('')
  const [retirementAge, setRetirementAge] = useState('')
  const [yearsLeft, setYearsLeft] = useState(null)

  const calculate = () => {
    if (!currentAge || !retirementAge) return
    setYearsLeft(retirementAge - currentAge)
  }

  return (
    <div>
      <input type="number" placeholder="Current Age" value={currentAge}
        onChange={e => setCurrentAge(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Retirement Age" value={retirementAge}
        onChange={e => setRetirementAge(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {yearsLeft !== null && <p className="mt-3">Years left until retirement: {yearsLeft}</p>}
    </div>
  )
}
