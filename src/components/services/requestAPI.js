import axios from 'axios';
import { Notify } from 'notiflix';

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

const fetchTrainings = async token => {
  try {
    const { data } = await instance.get('/trainings', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const addTraining = async (training, token) => {
  try {
    const { data } = await instance.post('/trainings/add', training, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteTraining = async (id, token) => {
  try {
    const { data } = await instance.delete(`/trainings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const signUpUser = async body => {
  try {
    const { data } = await instance.post('/users/signup', body);
    return data;
  } catch (error) {
    Notify.failure(error.response.data.message);
  }
};

const sigInUser = async body => {
  try {
    const { data } = await instance.post('/users/signin', body);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      Notify.failure(error.response.data.message)
      return(error)
    }
    
  }
};

const signOutUser = async token => {
  try {
    await instance.get('/users/signout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

const fetchCurrentUser = async token => {
  try {
    const { data } = await instance.get('/users/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data;
  } catch (error) {
    if(error.response.status === 401) {
      localStorage.clear()
    }
    return ({
      token: null,
      email: null
    })

  }
};

const fetchSchedule = async (period, token) => {
  try {
    const { data } = await instance.get(`schedules/${period}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addScheduleItem = async (item, token) => {
  try {
    const { data } = await instance.post('/schedules/add', item, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const deleteScheduleItem = async (id, token) => {
  try {
    const {data} = await instance.delete(`/schedules/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteMultipleScheduleItems = async (name, token) => {
  try {
    const {data} = await instance.delete(`/schedules/delete/multiple/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const requestAPI = {
  fetchExercises,
  fetchTrainings,
  fetchSchedule,
  signUpUser,
  sigInUser,
  signOutUser,
  fetchCurrentUser,
  addTraining,
  addScheduleItem,
  deleteTraining,
  deleteScheduleItem,
  deleteMultipleScheduleItems
};
