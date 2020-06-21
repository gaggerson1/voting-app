/**
 * Libraries
 */
import React, {useState, Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Components
 */
import VoteProgress from '../VoteProgress';

/**
 * Styles
 */
import './Card.scss';

/**
 * Assets
 */
import icons from '../../../assets/font-icon/voting/icons.svg';

const Card = ({className, data, onVote}) => {
  const [voting, setVoting] = useState(true);
  const [voteValue, setVoteValue] = useState(true);

  const classes = classNames('voting-card', className);

  const handleSelectVote = (value) => {
    return (e) => {
      setVoteValue(value);
    };
  };

  const handleVote = () => {
    onVote(voteValue, data.id);
    setVoting(false);
    setVoteValue(true);
  };

  const handleVoteAgain = () => {
    setVoting(true);
  };

  const renderTag = () => {
    return data.votes.up > data.votes.down ? (
      <span
        className={classNames(
          'voting-button',
          'voting-button--icon-button',
          'voting-button--bg-jave',
          'voting-button--without-events',
          'voting-card__content-button',
        )}>
        <svg>
          <use xlinkHref={`${icons}#voting-icon-thumbs-up`}></use>
        </svg>
      </span>
    ) : data.votes.up < data.votes.down ? (
      <span
        className={classNames(
          'voting-button',
          'voting-button--icon-button',
          'voting-button--bg-my-sin',
          'voting-button--without-events',
          'voting-card__content-button',
        )}>
        <svg>
          <use xlinkHref={`${icons}#voting-icon-thumbs-down`}></use>
        </svg>
      </span>
    ) : null;
  };

  return (
    <div className={classes}>
      <img
        className={classNames('voting-card__bgr-image')}
        src={data.picture}
        alt={data.name}
      />
      <div className={classNames('voting-card__wrapper')}>
        <div className={classNames('voting-card__content')}>
          {renderTag()}
          <h2 className={classNames('voting-card__name')}>{data.name}</h2>
          <p className={classNames('voting-card__time')}>
            {`${data.time} in ${data.area}`}
          </p>
          {
            {
              true: (
                <Fragment>
                  <p className={classNames('voting-card__description')}>
                    {data.description}
                  </p>
                  <div className={classNames('voting-card__actions')}>
                    <button
                      className={classNames(
                        'voting-button',
                        'voting-button--icon-button',
                        'voting-button--bg-jave',
                        'voting-card__action-button',
                        !!voteValue &&
                          'voting-button--bordered voting-button--bordered--white',
                      )}
                      onClick={handleSelectVote(true)}>
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
                        !voteValue &&
                          'voting-button--bordered voting-button--bordered--white',
                      )}
                      onClick={handleSelectVote(false)}>
                      <svg>
                        <use
                          xlinkHref={`${icons}#voting-icon-thumbs-down`}></use>
                      </svg>
                    </button>
                    <button
                      className={classNames(
                        'voting-button',
                        'voting-button--outline',
                        'voting-button--outline--white',
                        'voting-card__action-button',
                      )}
                      onClick={handleVote}>
                      Vote Now
                    </button>
                  </div>
                </Fragment>
              ),
              false: (
                <Fragment>
                  <p
                    className={classNames(
                      'voting-card__description',
                      'voting-card__description--thanks',
                    )}>
                    Thank you for voting!
                  </p>
                  <button
                    className={classNames(
                      'voting-button',
                      'voting-button--outline',
                      'voting-button--outline--white',
                      'voting-card__action-button',
                    )}
                    onClick={handleVoteAgain}>
                    Vote again
                  </button>
                </Fragment>
              ),
            }[voting]
          }
        </div>
        <VoteProgress votes={data.votes} />
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    area: PropTypes.string,
    time: PropTypes.string,
    votes: PropTypes.shape({
      up: PropTypes.number,
      down: PropTypes.number,
    }),
  }).isRequired,
  onVote: PropTypes.func,
};

Card.defaultProps = {
  onVote: () => {},
};

export default Card;
