import PropTypes from 'prop-types';

export const background = PropTypes.shape({
  type: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const serverUri = PropTypes.string;

export const settings = PropTypes.shape({
  serverUri,
  background,
});

export default null;
