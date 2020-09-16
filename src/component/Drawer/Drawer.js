import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import DrawerOption from './DrawerOptions';
import './Drawer.css';
import { IconContext } from 'react-icons';

function Drawer() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div to="#" className="menu-bars">
            <FaIcons.FaBars
              style={{ color: '#060b26' }}
              onClick={showSidebar}
            />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div to="#" className="menu-bars">
                <AiIcons.AiOutlineClose style={{ color: '#060b26' }} />
              </div>
            </li>
            <div className="drawer-menu">
              <DrawerOption title="Home" icon="fa fa-home fa-2x" />
              <DrawerOption title="Explore" icon="fas fa-hashtag fa-2x" />
              <DrawerOption title="Notifications" icon="fas fa-bell fa-2x" />
              <DrawerOption title="Messages" icon="fas fa-envelope fa-2x" />
              <DrawerOption title="Bookmarks" icon="fas fa-bookmark fa-2x" />
              <DrawerOption title="Lists" icon="fas fa-list fa-2x" />
              <DrawerOption title="Profile" icon="fas fa-user-circle fa-2x" />
              <DrawerOption
                title="More"
                icon="fas fa-angle-double-right fa-2x"
              />
              <div>
                <button className="drawerButton">Feed</button>
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Drawer;
