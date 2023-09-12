/* eslint-disable react/prop-types */
import { useState } from 'react'
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

function InputCard({purchasePrice, estimatedRent, monthlyMortgage, onPurchasePriceChange, onEstimatedRentChange, onMonthlyMortgageChange}) {
  return (
    <div className='inputs card'>
      <label>Purchase Price: </label>
      <input type="number" value={purchasePrice} step={100} onChange={(e) => onPurchasePriceChange(e.target.value)}/>

      <label >Estimated Rent: </label>
      <input type="number" value={estimatedRent} step={100} onChange={(e) => onEstimatedRentChange(e.target.value)}/>

      <label>Monthly Mortgage: </label>
      <input type="number" value={monthlyMortgage} step={100} onChange={(e) => onMonthlyMortgageChange(e.target.value)}/>
    </div>
  )
}

function RulePassCard({passesOnePercent, passesTwoPercent, cashFlow}) {
  return (
    <div className='card'>
      <h4>Passes 1% Rule? {passesOnePercent? '✅' : '❌'}</h4>
      <h4>Passes 2% Rule? {passesTwoPercent? '✅' : '❌'}</h4>
      <h4>Cash Flow based on 50% Rules? <h3 style={{color: '#FB2576'}}>${cashFlow}</h3></h4>
    </div>
  )
}

export default App
