import React, { useState } from 'react'

// Import all calculators from your list
import AreaCalculator from './calculators/AreaCalculator'
import BMI from './calculators/BMI'
import BMR from './calculators/BMR'
import BodyFatCalculator from './calculators/BodyFatCalculator'
import CalorieBurnCalculator from './calculators/CalorieBurnCalculator'
import CompoundInterest from './calculators/CompoundInterest'
import CurrencyConverter from './calculators/CurrencyConverter'
import DateDifference from './calculators/DateDifference'
import DiscountCalculator from './calculators/DiscountCalculator'
import ForceCalculator from './calculators/ForceCalculator'
import KineticEnergy from './calculators/KineticEnergy'
import LengthConverter from './calculators/LengthConverter'
import LoanCalculator from './calculators/LoanCalculator'
import MortgageCalculator from './calculators/MortgageCalculator'
import PercentageOf from './calculators/PercentageOf'
import PercentChange from './calculators/PercentChange'
import PercentOfTotal from './calculators/PercentOfTotal'
import RetirementCalculator from './calculators/RetirementCalculator'
import SimpleInterest from './calculators/SimpleInterest'
import SpeedCalculator from './calculators/SpeedCalculator'
import SplitBill from './calculators/SplitBill'
import TemperatureConverter from './calculators/TemperatureConverter'
import TipCalculator from './calculators/TipCalculator'
import VolumeCalculator from './calculators/VolumeCalculator'
import WeightConverter from './calculators/WeightConverter'

export default function CalculatorList() {
  const calculators = [
    { name: 'Area Calculator', component: <AreaCalculator /> },
    { name: 'BMI Calculator', component: <BMI /> },
    { name: 'BMR Calculator', component: <BMR /> },
    { name: 'Body Fat Calculator', component: <BodyFatCalculator /> },
    { name: 'Calorie Burn Calculator', component: <CalorieBurnCalculator /> },
    { name: 'Compound Interest Calculator', component: <CompoundInterest /> },
    { name: 'Currency Converter', component: <CurrencyConverter /> },
    { name: 'Date Difference Calculator', component: <DateDifference /> },
    { name: 'Discount Calculator', component: <DiscountCalculator /> },
    { name: 'Force Calculator', component: <ForceCalculator /> },
    { name: 'Kinetic Energy Calculator', component: <KineticEnergy /> },
    { name: 'Length Converter', component: <LengthConverter /> },
    { name: 'Loan Calculator', component: <LoanCalculator /> },
    { name: 'Mortgage Calculator', component: <MortgageCalculator /> },
    { name: 'Percentage Of Calculator', component: <PercentageOf /> },
    { name: 'Percent Change Calculator', component: <PercentChange /> },
    { name: 'Percent Of Total Calculator', component: <PercentOfTotal /> },
    { name: 'Retirement Calculator', component: <RetirementCalculator /> },
    { name: 'Simple Interest Calculator', component: <SimpleInterest /> },
    { name: 'Speed Calculator', component: <SpeedCalculator /> },
    { name: 'Split Bill Calculator', component: <SplitBill /> },
    { name: 'Temperature Converter', component: <TemperatureConverter /> },
    { name: 'Tip Calculator', component: <TipCalculator /> },
    { name: 'Volume Calculator', component: <VolumeCalculator /> },
    { name: 'Weight Converter', component: <WeightConverter /> },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
        {calculators.map((calc, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-2 border rounded ${activeIndex === index ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {calc.name}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded bg-white shadow">
        {calculators[activeIndex].component}
      </div>
    </div>
  )
}
