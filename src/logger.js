// eslint-disable-next-line no-console
const warn = console.warn.bind(console);

// eslint-disable-next-line no-console
const error = console.error.bind(console);

// eslint-disable-next-line no-console
const info = console.info.bind(console);

const logger = {
  warn,
  error,
  info,
};

export default logger;
