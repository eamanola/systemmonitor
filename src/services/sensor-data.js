import logger from '../util/logger';

const mockData = () => ({
  cpu: {
    temperature: [20, '*C'],
    utilization: [20, 'rpm'],
    name: '111111ssssssssssssssssssss111111111',
    fanspeed: [1000, 'rpm'],
    memory: [20, '%'],
  },
  gpu: {
    temperature: [20, '*C'],
    utilization: [20, 'rpm'],
    name: '111111ssssssssssssssssssss111111111',
    fanspeed: [1000, 'rpm'],
    memory: [20, '%'],
  },
  fans: [
    { name: 'fan 1', speed: [888, 'rpm'] },
    { name: 'fan 2', speed: [888, 'rpm'] },
    { name: 'fan 3', speed: [888, 'rpm'] },
    { name: 'fan 4', speed: [888, 'rpm'] },
    { name: 'fan 5', speed: [888, 'rpm'] },
    { name: 'fan 6', speed: [888, 'rpm'] },
    { name: 'fan 7', speed: [888, 'rpm'] },
    { name: 'fan 8', speed: [888, 'rpm'] },
    { name: 'fan 9', speed: [888, 'rpm'] },
    { name: 'fan 10', speed: [888, 'rpm'] },
    { name: 'fan 11', speed: [888, 'rpm'] },
    { name: 'fan 12', speed: [888, 'rpm'] },
  ],
});

export const fetchSensorData = async (serverUri, { DEBUG } = {}) => {
  if (DEBUG) return mockData();

  try {
    const endPoint = `${serverUri.toLowerCase()}/sensors`;
    const response = await fetch(endPoint);

    return response.json();
  } catch (err) {
    logger.error('fetchSensorData', err);
    logger.info(serverUri);

    return null;
  }
};

export default null;
