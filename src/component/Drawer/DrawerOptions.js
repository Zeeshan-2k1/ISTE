import React from 'react';

const DrawerOptions = (props) => {
  return (
    <div className="drawerOption">
      <i
        style={{ paddingRight: '1.25rem' }}
        className={props.icon}
        aria-hidden="true"
      />
      <h2>{props.title}</h2>
    </div>
  );
};

export default DrawerOptions;
