import logger from '../util/logger';

const checkHealth = async (serverUri, { DEBUG = false } = {}) => {
  if (DEBUG) return true;

  try {
    const endPoint = `${serverUri.toLowerCase()}/health`;
    const response = await fetch(endPoint);

    return response.status === 200;
  } catch (err) {
    logger.error('checkHealth', err);
    logger.info(serverUri);

    return false;
  }
};

export default checkHealth;
