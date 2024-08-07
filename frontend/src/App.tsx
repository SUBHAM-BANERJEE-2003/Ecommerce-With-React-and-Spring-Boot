import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import AddProductForm from './components/AddProductForm'
import About from './components/About'
import Contact from './components/Contact'
import EditForm from './components/EditForm'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/add' element={<AddProductForm />} />
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App