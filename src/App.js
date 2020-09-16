import React from 'react';
import './App.css';
import Drawer from './component/Drawer/Drawer';
import Feed from './component/Feed/Feed';
import Widgets from './component/Widgets/Widgets';

const App = () => {
  return (
    <div className="App">
      <Drawer />
      <div className="main">
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default App;
