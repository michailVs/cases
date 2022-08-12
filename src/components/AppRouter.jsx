import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import CaseList from './CaseList'
import InventoryItem from './InventoryItem'

const AppRouter = ({balance, setBalance}) => {
  const [inventory, setInventory] = useState([])
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === inventory[i].id) {
      inventory[i].id += 1
    }
  }
  const saleInvItem = (item) => {
    setBalance(balance + item.price)
    setInventory(inventory.filter(i => i.id !== item.id))
  }
  return (
    <Routes>
        <Route path='/' element={<CaseList balance={balance} setBalance={setBalance} setInventory={setInventory} inventory={inventory}/>}/>
        <Route path='/inventory' element={<InventoryItem invItem={inventory} saleItem={saleInvItem}/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  )
}

export default AppRouter