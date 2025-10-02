import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Outlet />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>
    )
}

export default Layout