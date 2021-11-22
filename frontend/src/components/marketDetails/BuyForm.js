import React from 'react';

const BuyForm = props => {
    const {
        portfolio, 
        setHistory, 
        currPrice, setCurrPrice, 
        currAmount, setCurrAmount,
        currCost, setCurrCost,
        symbol,
        orderType
    } = props.buyProps;
    const {firstSymbol, secondSymbol} = symbol;

    return (
        <div>
            <p>available: {portfolio[0].amount} {portfolio[0].symbol}</p>
            <label for="at-price">At  {secondSymbol}</label>
            <input type="text" name="at-price" value={currPrice} onChange={e => {
                const newPrice = e.target.value;
                setCurrPrice(newPrice);
                setCurrAmount(currCost / newPrice);
            }} />
            <label for="receive">Receive {firstSymbol}</label>
            <input type="text" name="receive" value={currAmount} onChange={e => {
                const newAmount = e.target.value;
                setCurrAmount(newAmount);
                setCurrPrice(portfolio[0].amount / newAmount);
            }} />
            <label for="cost">Cost in {secondSymbol}</label>
            <input type="text" name="cost" value={currCost} onChange={e => {
                const newCost = e.target.value;
                setCurrCost(newCost);
                setCurrAmount(newCost / currPrice);
            }} />
            <button className="btn-buy" onClick={() => 
                setHistory((lastHistory, props) => lastHistory.concat([{symbol: {firstSymbol, secondSymbol}, type: orderType, atPrice: currPrice, amount: currAmount, cost: currCost}])
            )}>Buy</button>
        </div>
    );
}
 
export default BuyForm;