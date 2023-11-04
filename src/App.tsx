import { Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Footer from "./components/Footer"
import Home  from "./pages/Home"
import Product from "./pages/Product"
import Header from "./components/Header"


function App() {
  return (
    <ShoppingCartProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
