import logger from '../logger';

export const fetchSensorData = async (serverUri) => {
  try {
    const endPoint = `${serverUri.toLowerCase()}/sensors`;
    const response = await fetch(endPoint);
    return response.json();
  } catch (err) {
    logger.error('fetchSensorData', err);
    return null;
  }
};

export default null;
