import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Header from './componets/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Navbar/>
     <Routes>
      <Route/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
