import React, { useState } from 'react';

export function AppDrawer() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function showNav() {
    const obj = {};
    if (click) {
      obj.overlay = 'overlay';
      obj.navModal = 'nav-modal-active white-background border-right';
      obj.hamburger = 'fa-solid fa-bars hamburger hidden';
      obj.nav = 'nav';
    } else {
      obj.overlay = '';
      obj.navModal = 'nav-modal';
      obj.hamburger = 'fa-solid fa-bars hamburger';
      obj.nav = 'nav hidden';
    }
    return obj;
  }

  const { overlay, navModal, hamburger, nav } = showNav();
  return (
    <>
      <div className={overlay} onClick={handleClick}></div>
      <div className='container'>
        <i className={hamburger} onClick={handleClick}></i> {/* hidden */}
        <div className={navModal}> {/* border-right */}
          <div className={nav}> {/* remove hidden */}
            <h1>Menu</h1>
            <div className='pointer nav'>
              <a onClick={handleClick}>About</a>
              <a onClick={handleClick}>Get Started</a>
              <a onClick={handleClick}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
