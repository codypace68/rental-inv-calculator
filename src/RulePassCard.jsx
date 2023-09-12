export default function RulePassCard({passesOnePercent, passesTwoPercent, cashFlow}) {
    return (
      <div className='card'>
        <h4>Passes 1% Rule? {passesOnePercent? '✅' : '❌'}</h4>
        <h4>Passes 2% Rule? {passesTwoPercent? '✅✅' : '❌'}</h4>
        <h4>Cash Flow based on 50% Rules? <h3 style={{color: '#FB2576'}}>{cashFlow < 0 ? '🥹 $' + cashFlow : '💰 $' + cashFlow}</h3></h4>
      </div>
    )
  }