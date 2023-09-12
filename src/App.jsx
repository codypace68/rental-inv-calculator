/* eslint-disable react/prop-types */
import { useState } from 'react'
import InputCard from './InputCard'
import RulePassCard from './RulePassCard'
import './App.css'

function App() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [estimatedRent, setEstimatedRent] = useState("");
  const [monthlyMortgage, setMonthlyMortgage] = useState("");

  // derived state
  const passesOnePercentRule = estimatedRent / purchasePrice > 0.01;
  const passesTwoPercentRule = estimatedRent / purchasePrice > 0.02;
  const estimatedCashFlow = (estimatedRent * .5) - monthlyMortgage;

  return (
    <div className='container'>
      <InputCard 
        purchasePrice={purchasePrice} 
        estimatedRent={estimatedRent} 
        monthlyMortgage={monthlyMortgage}
        onPurchasePriceChange={setPurchasePrice}
        onEstimatedRentChange={setEstimatedRent}
        onMonthlyMortgageChange={setMonthlyMortgage}
      />
      <RulePassCard 
        passesOnePercent={passesOnePercentRule}
        passesTwoPercent={passesTwoPercentRule}
        cashFlow={estimatedCashFlow}
      />
    </div>
  )
}

export default App
