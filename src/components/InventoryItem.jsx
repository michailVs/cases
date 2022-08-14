import React from 'react'

const InventoryItem = ({invItem, saleItem, caseCount, setInventory, setBalance, balance}) => {
    let bal = 0
    invItem.map(i => bal += i.price)
    const saleAllItem = () => {
        setBalance(balance + bal)
        setInventory([])
    }
    return (
        <div>
            <h3>Открыто кейсов: {caseCount}</h3>
            <h2>Инвентарь: </h2>
            <button onClick={() => saleAllItem()}>Продать всё за {bal}</button>
            {invItem.map(item => 
                <div key={item.id}>
                    <img src={item.src} alt={item.title} />
                    <h3>{item.title}</h3>
                    <button onClick={() => saleItem(item)}>Продать предмет за {item.price} руб.</button>
                </div>
            )}
        </div>
    )
}

export default InventoryItem