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

export default null;
