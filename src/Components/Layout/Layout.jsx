import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout