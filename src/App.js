import React from 'react';
import './App.css';
import Drawer from './component/Drawer/Drawer';
import Feed from './component/Feed/Feed';
import Widgets from './component/Widgets/Widgets';

const App = () => {
  return (
    <div className="App">
      <Drawer />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
