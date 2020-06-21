/**
 * Libraries
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import '../Card.scss';

/**
 * Assets
 */
import icons from '../../../../assets/font-icon/voting/icons.svg';

const CardFeatured = ({className, data}) => {
  const classes = classNames('voting-card', 'voting-card--featured', className);

  return (
    <div className={classes}>
      <img
        className={classNames(
          'voting-card__bgr-image',
          'voting-card--featured-bgr-image',
        )}
        src={data.picture}
        alt={data.name}
      />
      <div className={classNames('voting-card__wrapper')}>
        <div
          className={classNames(
            'voting-card__content',
            'voting-card__content--featured',
          )}>
          <h4 className={classNames('voting-card__subheading')}>
            What’s your opinion on
          </h4>
          <h2
            className={classNames(
              'voting-card__name',
              'voting-card__name--featured',
            )}>
            {data.name}
          </h2>
          <p
            className={classNames(
              'voting-card__description',
              'voting-card__description--featured',
            )}>
            {data.description}
          </p>
          <span className={classNames('voting-card__more-info')}>
            <i className={classNames('voting-card__more-info-icon')}>
              <svg>
                <use xlinkHref={`${icons}#voting-icon-wikipedia`}></use>
              </svg>
            </i>
            <a
              className={classNames('voting-card__more-info-link')}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.wikipedia.org/">
              More information
            </a>
          </span>
          <h3 className={classNames('voting-card__subtitle')}>
            What’s Your Verdict?
          </h3>
        </div>
        <div
          className={classNames(
            'voting-card__actions',
            'voting-card__actions--featured',
          )}>
          <button
            className={classNames(
              'voting-button',
              'voting-button--icon-button',
              'voting-button--bg-jave',
              'voting-card__action-button',
              'voting-card__action-button--featured',
            )}>
            <svg>
              <use xlinkHref={`${icons}#voting-icon-thumbs-up`}></use>
            </svg>
          </button>
          <button
            className={classNames(
              'voting-button',
              'voting-button--icon-button',
              'voting-button--bg-my-sin',
              'voting-card__action-button',
              'voting-card__action-button--featured',
            )}>
            <svg>
              <use xlinkHref={`${icons}#voting-icon-thumbs-down`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CardFeatured.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    area: PropTypes.string,
    time: PropTypes.string,
    votes: PropTypes.shape({
      up: PropTypes.number,
      down: PropTypes.number,
    }),
  }),
};

export default CardFeatured;
