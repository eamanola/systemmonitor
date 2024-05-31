import PropTypes from 'prop-types';

export const children = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
]);

export const background = PropTypes.shape({
  type: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const server = PropTypes.shape({
  uri: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired,
});

export const settings = PropTypes.shape({
  server: server.isRequired,
  background: background.isRequired,
});

export default null;
