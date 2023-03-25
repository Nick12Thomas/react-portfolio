import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    
    return ( 
        <div class="App">
         <Sidebar />
         <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            
            <Outlet />

            <span className='tags bottom-tag-html'>&lt;/html&gt;</span>

         </div>
         <div className='footer'>
         <footer>© Nikhil S Thomas </footer>
         </div>
        </div>
    )
}
export default Layout 