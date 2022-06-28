import PropTypes from 'prop-types';

const NotificationMessage = ({ title }) => <p>{title}</p>;

NotificationMessage.propTypes = {
  title: PropTypes.string,
};

export default NotificationMessage;
