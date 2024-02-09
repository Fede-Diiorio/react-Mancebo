import { useState } from "react"

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])
  console.log(cart)

  return (
    <>
      <BrowserRouter>
        <NavBar cart={cart}/>
        <Routes> 
         <Route path='/' element={<ItemListContainer greeting={'Listado de Comics'}/>} />
         <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de Comics filtrados'}/>} />
         <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} />} />        
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App