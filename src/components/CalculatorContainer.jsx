import React from 'react'

export default function CalculatorContainer({ component: Component, title }) {
  return (
    <div className="bg-white shadow-lg rounded p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Component />
    </div>
  )
}
