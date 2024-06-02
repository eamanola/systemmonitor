export const fetchSensorData = async (serverUri) => {
  try {
    const endPoint = `${serverUri.toLowerCase()}/sensors`;
    const response = await fetch(endPoint);
    return response.json();
  } catch (err) {
    console.error('fetchSensorData', err);
    return null;
  }
};

export const checkHealth = async (serverUri) => {
  try {
    const endPoint = `${serverUri.toLowerCase()}/health`;
    const response = await fetch(endPoint);
    return response.status === 200;
  } catch (err) {
    console.error('checkHealth', err);
    return false;
  }
};
