import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </>
);

Statistics.defaultProps = {
  good: 0,
  bad: 0,
  neutral: 0,
  total: 0,
  positivePercentage: '',
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
