import PropTypes from 'prop-types';
const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

Section.defaultProps = {
  title: '',
  children: null,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
