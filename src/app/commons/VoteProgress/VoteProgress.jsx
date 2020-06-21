/**
 * Libraries
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import './VoteProgress.scss';

/**
 * Assets
 */
import icons from '../../../assets/font-icon/voting/icons.svg';

const Progress = ({votes}) => {
  const getTotal = () => votes.up + votes.down;

  const getPercentage = (value) => {
    const total = getTotal();
    let percentage = Math.round((value * 100) / total);
    return percentage;
  };

  const upPercentage = getPercentage(votes.up);
  const downPercentage = getPercentage(votes.down);

  return (
    <div className={classNames('voting-vote-progress')}>
      {upPercentage > 0 && (
        <div
          className={classNames('voting-vote-progress__up-wrapper')}
          style={{width: `${upPercentage}%`}}>
          <svg
            className={classNames(
              'voting-vote-progress__icon',
              'voting-vote-progress__up-wrapper-icon',
            )}>
            <use xlinkHref={`${icons}#voting-icon-thumbs-up`}></use>
          </svg>
          <span className={classNames('voting-vote-progress__percentage')}>
            {`${upPercentage}%`}
          </span>
        </div>
      )}
      {downPercentage > 0 && (
        <div
          className={classNames('voting-vote-progress__down-wrapper')}
          style={{width: `${downPercentage}%`}}>
          <span className={classNames('voting-vote-progress__percentage')}>
            {`${downPercentage}%`}
          </span>
          <svg
            className={classNames(
              'voting-vote-progress__icon',
              'voting-vote-progress__down-wrapper-icon',
            )}>
            <use xlinkHref={`${icons}#voting-icon-thumbs-down`}></use>
          </svg>
        </div>
      )}
    </div>
  );
};

Progress.propTypes = {
  votes: PropTypes.shape({
    up: PropTypes.number,
    down: PropTypes.number,
  }),
};

Progress.defaultProps = {
  votes: {
    up: 0,
    down: 0,
  },
};

export default Progress;
