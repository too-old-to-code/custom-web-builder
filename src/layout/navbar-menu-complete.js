import React, { useState, useEffect, useRef } from 'react';
import { Menu } from './_menu';
import { Navbar } from './_navbar';
import { BurgerMenu } from './_burger-menu';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const NavMenuComplete = props => {
  const [isOpen, toggleOpen] = useState(false);
  const openMenu = useRef();

  useEffect(() => {
    const handleResize = () => toggleOpen(false);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    let targetElement = openMenu;
    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <React.Fragment>
      <Navbar itemsRight={props.desktopItems} logo={props.logo} />
      <Menu isOpen={isOpen} ref={openMenu}>
        {props.mobileItems}
      </Menu>
      <BurgerMenu
        toggleOpen={() => toggleOpen(!isOpen)}
        isActive={isOpen}
        burgerStyle={props.burgerStyle}
      />
    </React.Fragment>
  );
};
