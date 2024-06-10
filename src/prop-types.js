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

export const valueArray = PropTypes.arrayOf(
  (value) => (
    value.length === 2
    && typeof (value[0]) === 'number'
    && typeof (value[1]) === 'string'
  ),
);

export const valueObj = PropTypes.shape({
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
});

export default null;
