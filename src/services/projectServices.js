import * as https from '../utils/https';

export const fetchRelatedProjects = async adminEmail => {
  try {
    let headers = {
      email: adminEmail,
    };

    let response = await https.get('project', headers);

    return response;
  } catch (err) {
    console.error('ERROR', err);
  }
};

export const createNewProject = async (projectName, adminEmail) => {
  try {
    let data = {
      project_name: projectName,
      admin_email: adminEmail,
    };

    let response = await https.post('project', data);
    return response;
  } catch (err) {
    console.error('ERROR');
  }
};

export const createNewProjectInstance = async (instanceName, projectName) => {
  try {
    let data = {
      project_name: projectName,
      instanceName: instanceName,
    };

    let response = await https.post('projectInstance', data);
    return response;
  } catch (err) {
    console.error('error in creating new project Instance');
  }
};

export const deleteSpecificProject = async projectID => {
  try {
    let response = await https.remove(`project/${projectID}`);
    return response;
  } catch (err) {
    console.error('error deleting data');
  }
};
