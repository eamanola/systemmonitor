import PropTypes from 'prop-types';

export const background = PropTypes.shape({
  type: PropTypes.string,
  uri: PropTypes.string,
  name: PropTypes.string,
});

export const serverUri = PropTypes.string;

export const settings = PropTypes.shape({
  serverUri,
  background,
});

export default null;
