export const fetchSensorData = async (serverUri) => {
  try {
    const endPoint = `${serverUri.toLowerCase()}/sensors`;
    const response = await fetch(endPoint);
    return response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const ping = async (serverUri) => {
  try {
    const endPoint = `${serverUri.toLowerCase()}/health`;
    const result = await fetch(endPoint);
    return result.status === 200;
  } catch (err) {
    console.log(err);
    return false;
  }
};
