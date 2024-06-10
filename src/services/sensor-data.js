import logger from '../util/logger';

const mockData = () => ({
  cpu: {
    temperature: { value: 20, unit: '*C' },
    utilization: { value: 20, unit: 'rpm' },
    name: '111111ssssssssssssssssssss111111111',
    fanspeed: { value: 1000, unit: 'rpm' },
    memory: { value: 20, unit: '%' },
  },
  gpu: {
    temperature: { value: 20, unit: '*C' },
    utilization: { value: 20, unit: 'rpm' },
    name: '111111ssssssssssssssssssss111111111',
    fanspeed: { value: 1000, unit: 'rpm' },
    memory: { value: 20, unit: '%' },
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
    // TODO: status 500
    return response.json();
  } catch (err) {
    logger.error('fetchSensorData', err);
    logger.info(serverUri);

    return null;
  }
};

export default null;
