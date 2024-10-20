import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProducrList from './pages/productList/ProducrList'
import ProductDetails from './pages/productDetails/ProductDetails'
import CartList from './pages/cartList/CartList'


function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/product-list' element={<ProducrList/>} />
        <Route path='/product-details/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<CartList/>} />
      </Routes>

    </Fragment>
  )
}

export default App
