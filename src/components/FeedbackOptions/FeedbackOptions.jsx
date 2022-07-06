import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnList = options.map(({ id, grade }) => (
    <li className={styles.btnItem} key={id}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback(grade)}
      >
        {grade}
      </button>
    </li>
  ));
  return <ul className={styles.btnList}>{btnList}</ul>;
};

FeedbackOptions.defaultProps = {
  options: [],
  onLeaveFeedback: () => {},
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func,
};

export default memo(FeedbackOptions);
