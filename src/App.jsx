import React from 'react';
import CalculatorList from './CalculatorList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Calc Hub — All-in-One Calculators
      </h1>
      <CalculatorList />
    </div>
  );
}
