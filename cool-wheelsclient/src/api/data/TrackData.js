import axios from 'axios';

const getTracks = () => new Promise((resolve, reject) => {
    axios.get('https://localhost:7095/api/tracks')
        .then((response) => {
            resolve(Object.values(response.data));
        })
        .catch(reject);
});

const getSingleTrack = (id) => new Promise((resolve, reject) => {
    axios.get(`https://localhost:7095/api/tracks/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
});

const createTrack = (obj) => new Promise((resolve, reject) => {
    axios
      .post(`https://localhost:7095/api/tracks`, obj)
      .then((response) => resolve(response.data))
      .catch(reject);
});

const updateTrack = (obj) => new Promise((resolve, reject) => {
    axios.patch(`https://localhost:7095/api/tracks/${obj.id}`, obj)
      .then(() => getTracks().then(resolve))
      .catch(reject);
  });

const deleteTrack = (id) => new Promise((resolve, reject) => {
  axios
    .delete(`https://localhost:7095/api/tracks/${id}`)
    .then(() => getTracks().then(resolve))
    .catch(reject);
});
export {
    getTracks,
    getSingleTrack,
    createTrack,
    updateTrack,
    deleteTrack,
};