/**
 * Libraries
 */
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

/**
 * Dependencies
 */
import routes from '../app/config/routes';
import * as localstorage from '../services/localstorage';
import initalState from './initalState';

/**
 * Components
 */
import Card, {CardFeatured} from '../app/commons/Card';
import NavBar from '../app/commons/NavBar';

/**
 * Constants
 */
import {LOCALSTORAGE} from '../constants/constants';

/**
 * Styles
 */
import './Home.scss';

/**
 * Assets
 */
import icons from '../assets/font-icon/voting/icons.svg';

const Home = () => {
  const [featured] = useState(initalState.featured);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  const handleVote = (value, id) => {
    const peopleCopy = [...people];
    const personIndex = peopleCopy.findIndex((p) => p.id === id);
    const oldPerson = peopleCopy[personIndex];
    const newPerson = {
      ...oldPerson,
      votes: {
        up: !!value ? oldPerson.votes.up + 1 : oldPerson.votes.up,
        down: !value ? oldPerson.votes.down + 1 : oldPerson.votes.down,
      },
    };

    const newPeople = [
      ...people.slice(0, personIndex),
      newPerson,
      ...people.slice(personIndex + 1, people.length),
    ];

    setPeople(newPeople);
    savePeople(newPeople);
  };

  const getPeople = () => {
    const people =
      localstorage.getObject(LOCALSTORAGE.votingData) || initalState.people;
    setPeople(people);
  };

  const savePeople = (people) => {
    localstorage.setObject(LOCALSTORAGE.votingData, people);
  };

  return (
    <div className={classNames('voting-home')}>
      <section className={classNames('voting-home__main-section')}>
        <div className={classNames('voting-home__main-section-header-wrapper')}>
          <header className={classNames('voting-home__main-section-header')}>
            <h1
              className={classNames('voting-home__main-section-header-title')}>
              Rule of Thumb.
            </h1>
            <NavBar />
          </header>
        </div>
        <div className={classNames('voting-home__main-section-content')}>
          <CardFeatured data={featured} />
        </div>
        <div className={classNames('voting-home__main-section-footer')}>
          <div className={classNames('voting-closing-bar')}>
            <div className={classNames('voting-closing-bar__message-wrapper')}>
              <span className={classNames('voting-closing-bar__message')}>
                CLOSING IN
              </span>
            </div>
            <div className={classNames('voting-closing-bar__days-wrapper')}>
              <span className={classNames('voting-closing-bar__number-days')}>
                22
              </span>
              <span className={classNames('voting-closing-bar__text-days')}>
                days
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className={classNames('voting-home__wrapper')}>
        <section className={classNames('voting-home__body-section')}>
          <div
            className={classNames(
              'voting-alert',
              'voting-home__body-section-alert',
            )}>
            <div className={classNames('voting-alert__left-info')}>
              <span className={classNames('voting-alert__subheading')}>
                Speak out. Be heard.
              </span>
              <span className={classNames('voting-alert__heading')}>
                Be counted
              </span>
            </div>
            <span className={classNames('voting-alert__text')}>
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It’s easy: You
              share your opinion, we analyze and put the data in a public
              report.
            </span>
            <button
              className={classNames(
                'voting-button',
                'voting-button--icon-button',
                'voting-alert__button',
              )}>
              <svg>
                <use xlinkHref={`${icons}#voting-icon-cross-out`}></use>
              </svg>
            </button>
          </div>
          <h1 className={classNames('voting-home__body-section-title')}>
            Votes
          </h1>
          <div
            className={classNames('voting-home__body-section-cards-wrapper')}>
            {people.map((p, index) => (
              <Card
                key={index}
                className={classNames('voting-home__body-section-card ')}
                data={p}
                onVote={handleVote}
              />
            ))}
          </div>
          <div
            className={classNames('voting-home__body-section-submit-wrapper')}>
            <span
              className={classNames(
                'voting-home__body-section-submit-wrapper-text',
              )}>
              Is there anyone else you would want us to add?
            </span>
            <button
              className={classNames(
                'voting-button',
                'voting-button--outline',
                'voting-button--outline--mine-shaft',
                'voting-home__body-section-submit-wrapper-button',
              )}>
              Submit a Name
            </button>
          </div>
        </section>
        <footer className={classNames('voting-home__footer-section')}>
          <nav
            className={classNames(
              'voting-nav',
              'voting-nav--alternative',
              'voting-home__footer-section-nav',
            )}>
            <NavLink
              className={classNames('voting-home__footer-section-nav__link')}
              to={routes.terms}>
              Terms and Conditions
            </NavLink>
            <NavLink
              className={classNames('voting-home__footer-section-nav__link')}
              to={routes.privacy}>
              Privacy Policy
            </NavLink>
            <NavLink
              className={classNames('voting-home__footer-section-nav__link')}
              to={routes.contact}>
              Contact Us
            </NavLink>
          </nav>
          <div className={classNames('voting-home__footer-follow')}>
            <span className={classNames('voting-home__footer-follow-text')}>
              Follow Us
            </span>
            <ul className={classNames('voting-home__footer-follow-list')}>
              <li className={classNames('voting-home__footer-follow-action')}>
                <a
                  className={classNames(
                    'voting-home__footer-follow-action-link',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/">
                  <svg>
                    <use xlinkHref={`${icons}#voting-icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li className={classNames('voting-home__footer-follow-action')}>
                <a
                  className={classNames(
                    'voting-home__footer-follow-action-link',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/?lang=es">
                  <svg>
                    <use xlinkHref={`${icons}#voting-icon-twitter`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
