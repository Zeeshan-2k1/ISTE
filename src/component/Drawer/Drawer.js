import React from 'react';
import './Drawer.css';
import DrawerOption from './DrawerOptions';

const Drawer = () => {
  return (
    <div
      onClick={(e) =>
        alert('Currently Web App is production. Sidebar features not available')
      }
      className="drawer"
    >
      <i
        style={{ color: '#50b7f5', margin: '1rem 0' }}
        className="fab fa-twitter fa-3x"
        aria-hidden="true"
      />
      <DrawerOption title="Home" icon="fa fa-home fa-2x" />
      <DrawerOption title="Explore" icon="fas fa-hashtag fa-2x" />
      <DrawerOption title="Notifications" icon="fas fa-bell fa-2x" />
      <DrawerOption title="Messages" icon="fas fa-envelope fa-2x" />
      <DrawerOption title="Bookmarks" icon="fas fa-bookmark fa-2x" />
      <DrawerOption title="Lists" icon="fas fa-list fa-2x" />
      <DrawerOption title="Profile" icon="fas fa-user-circle fa-2x" />
      <DrawerOption title="More" icon="fas fa-angle-double-right fa-2x" />

      <div>
        <button className="drawerButton">Feed</button>
      </div>
    </div>
  );
};

export default Drawer;
