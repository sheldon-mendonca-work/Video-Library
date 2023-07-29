import './Layout.css';
import './SideBar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ClockIcon, CompassIcon, HomeIcon, LeftArrowIcon, PlayListIcon } from '../Icons';
import SearchBar from '../../util/SearchBar/SearchBar';

const Layout = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const locationType = location.pathname.split('/')[1];
    return <div className='layout'>
        <header className='layoutHeading'>
            <div>
            { locationType !== "" && <LeftArrowIcon className="layoutHeading-svg" onClick={()=>navigate(-1)} />}
            <h1 className='heading1' onClick={()=>navigate('/')}>Video Library</h1>
            </div>
            <SearchBar placeholder="Search by video title." />
        </header>
        <div className='leftSideBar'>
            <ul className='sidebarNavList'>
                <li className='sidebarNavListItem'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListIcon"><HomeIcon className="navListSvg"/></span>
                            <span className="navListText">Home</span>
                        </span>
                    </NavLink>
                </li>
                <li className='sidebarNavListItem'>
                    <NavLink to="/videos" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListIcon"><CompassIcon className="navListSvg"/></span>
                            <span className="navListText">Explore</span>
                        </span>
                    </NavLink>
                </li>
                <li className='sidebarNavListItem'>
                    <NavLink to="/playlist" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListIcon"><PlayListIcon className="navListSvg"/></span>
                            <span className="navListText">Playlists</span>
                        </span>
                    </NavLink>
                </li>
                <li className='sidebarNavListItem'>
                    <NavLink to="/watchLater" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListIcon"><ClockIcon className="navListSvg"/></span>
                            <span className="navListText">Watch Later</span>
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <main>
            {children}
        </main>
    </div>
};

export default Layout;