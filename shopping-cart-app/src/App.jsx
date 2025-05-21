import { Fragment } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import ProductListPage from './pages/productList/index'
import ProductDetailsPage from './pages/productDetails/index'
import CartListPage from './pages/cartList/index'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </Fragment>
  )
}

export default App
