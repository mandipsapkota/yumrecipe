import { useState } from 'react'
import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>
      <Search/>
      <Category/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
