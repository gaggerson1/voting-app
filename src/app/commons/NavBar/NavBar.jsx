/**
 * Libraries
 */
import React, {useState, useEffect, useCallback} from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

/**
 * Dependencies
 */
import routes from '../../config/routes';

/**
 * Styles
 */
import './NavBar.scss';

/**
 * Assets
 */
import icons from '../../../assets/font-icon/voting/icons.svg';

const NavBar = () => {
  const [opened, setOpened] = useState(false);

  const setUpEvents = useCallback(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const clearEvents = useCallback(() => {
    window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setUpEvents();
    return clearEvents;
  }, [clearEvents, setUpEvents]);

  const handleToggleMenu = () => {
    const olValue = opened;
    setOpened(!olValue);
  };

  const handleResize = (e) => {
    const width = window.outerWidth;
    if (width > 767) {
      setOpened(false);
    }
  };

  return (
    <div className={classNames('voting-nav-bar')}>
      <button
        className={classNames(
          'voting-button',
          'voting-button--icon-button',
          'voting-nav-bar__button',
          'f-justify-start',
          opened && 'voting-nav-bar__button--opened',
        )}
        onClick={handleToggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav
        className={classNames(
          'voting-nav',
          'voting-nav--mobile',
          'voting-home__main-section-header-nav',
          'voting-nav-bar__nav',
          opened && 'voting-nav-bar__nav--opened',
        )}>
        <NavLink to={routes.trials}>Past Trials</NavLink>
        <NavLink to={routes.howItWorks}>How It Works</NavLink>
        <NavLink to={routes.signin}>Log In / Sign Up</NavLink>
        <NavLink
          className={classNames(
            'voting-button',
            'voting-button--icon-button',
            'f-justify-start',
          )}
          to={routes.search}>
          <svg>
            <use xlinkHref={`${icons}#voting-icon-search`}></use>
          </svg>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
