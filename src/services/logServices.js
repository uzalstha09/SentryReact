import * as https from '../utils/https';

export const fetchRelatedLogs = async (instanceId, projectId, userId) => {
  try {
    let headers = {
      instanceId: instanceId,
      projectId: projectId,
      userId: userId,
    };

    let response = await https.get('logs', headers);
    return response;
  } catch (err) {
    console.error('Log Fetch Error', err);
  }
};

export const changeStatus = async logId => {
  try {
    let headers = {
      logId: logId,
    };
    let response = await https.put('logs', headers);
    return response;
  } catch (err) {}
};
