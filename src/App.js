import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(10000)
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <h1>Баланс: {balance} руб. <button onClick={() => setBalance(balance + 10000)}>+</button></h1>
      <AppRouter balance={balance} setBalance={setBalance}/>
    </BrowserRouter>
  );
}

export default App;
