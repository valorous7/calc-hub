import React, { useState } from 'react'

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('')
  const [discountPercent, setDiscountPercent] = useState('')
  const [finalPrice, setFinalPrice] = useState(null)

  const calculate = () => {
    if (!originalPrice || !discountPercent) return
    const price = originalPrice - (originalPrice * (discountPercent / 100))
    setFinalPrice(price.toFixed(2))
  }

  return (
    <div>
      <input type="number" placeholder="Original Price" value={originalPrice}
        onChange={e => setOriginalPrice(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input type="number" placeholder="Discount (%)" value={discountPercent}
        onChange={e => setDiscountPercent(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      {finalPrice !== null && <p className="mt-3">Final Price: ${finalPrice}</p>}
    </div>
  )
}
