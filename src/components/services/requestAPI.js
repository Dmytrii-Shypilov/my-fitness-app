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

const addTraining = async training => {
  const { token } = JSON.parse(localStorage.getItem('user'));
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

const deleteTraining = async id => {
  const { token } = JSON.parse(localStorage.getItem('user'));
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
    console.log(error.message);
  }
};

const sigInUser = async body => {
  try {
    const { data } = await instance.post('/users/signin', body);
    return data;
  } catch (error) {
    console.log(error.message);
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
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSchedule = async period => {
  console.log(period)
  const { token } = JSON.parse(localStorage.getItem('user'));
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

const addScheduleItem = async (item) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
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

const deleteScheduleItem = async id => {
  const { token } = JSON.parse(localStorage.getItem('user'));
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

const deleteMultipleScheduleItems = async name => {
  console.log("axios multiple")
  const {token} = JSON.parse(localStorage.getItem('user'))
  try {
    const {data} = await instance.delete(`/schedules/delete/multiple/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log("response recieved")
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
