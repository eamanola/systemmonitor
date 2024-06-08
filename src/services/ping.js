import logger from '../logger';

const checkHealth = async (serverUri) => {
  try {
    const endPoint = `${serverUri.toLowerCase()}/health`;
    const response = await fetch(endPoint);
    return response.status === 200;
  } catch (err) {
    logger.error('checkHealth', err);
    return false;
  }
};

export default checkHealth;
