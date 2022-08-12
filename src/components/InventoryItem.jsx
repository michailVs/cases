import React from 'react'

const InventoryItem = ({invItem, saleItem}) => {
    return (
        <div>
            <h2>Инвентарь: </h2>
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