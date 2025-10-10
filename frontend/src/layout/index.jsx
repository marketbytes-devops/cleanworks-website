import { Outlet, useLocation } from 'react-router'
import Navbar from './Navbar'
import HomeFooter from './HomeFooter'
import DefaultFooter from './DefaultFooter'

const Layout = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
  
    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Outlet />
            </div>
            <div className='footer'>
                {isHomePage ? <HomeFooter /> : <DefaultFooter />}
            </div>
        </>
    )
}

export default Layout