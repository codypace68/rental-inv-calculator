export default function InputCard({purchasePrice, estimatedRent, monthlyMortgage, onPurchasePriceChange, onEstimatedRentChange, onMonthlyMortgageChange}) {
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