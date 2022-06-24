import PropTypes from 'prop-types';

const NotificationMessage = ({ title }) => <p>{title}</p>;

NotificationMessage.defaultProps = {
  title: '',
};

NotificationMessage.propTypes = {
  title: PropTypes.string,
};

export default NotificationMessage;
