import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

const fetchExercises = async () => {
  try {
    const { data } = await instance.get('/exercises');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchTrainings = async (token) => {
  try {
    const { data } = await instance.get('/trainings', {
      headers: {
        Authorization: `Bearer ${token}`
      }   
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const signUpUser = async body => {
  try {
    const {data} = await instance.post('/users/signup', body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const sigInUser = async (body) => {
  try {
    const {data} = await instance.post('/users/signin', body)
    return data
  } catch (error) {
    console.log(error.message)
  }
}

const signOutUser = async (token) => {
  try {
    await instance.get('/users/signout', {
      headers: {
        Authorization: `Bearer ${token}`
      }   
    })
  } catch (error) {
    console.log(error.message);
  }
}

const fetchCurrentUser = async (token) => {
  try {
    const {data} = await instance.get('users/current', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const requestAPI = {
  fetchExercises,
  fetchTrainings,
  signUpUser,
  sigInUser,
  signOutUser,
  fetchCurrentUser,

};
