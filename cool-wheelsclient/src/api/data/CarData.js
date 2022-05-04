import axios from 'axios';

const getCars = () => new Promise((resolve, reject) => {
    axios.get('https://localhost:7095/api/Car')
        .then((response) => {
            resolve(Object.values(response.data));
        })
        .catch(reject);
});

const createCar = (obj) => new Promise((resolve, reject) => {
    axios
        .post('https://localhost:7095/api/Car', obj)
        .then((response) => {
            const id = response.data.name;
            axios
                .patch(`https://localhost:7095/api/Car/${id}`, { id })
                .then(() => {
                    getCars().then(resolve);
                });
        })
        .catch(reject);
});

const updateCar = (updateObj) => new Promise((resolve, reject) => {
    axios
        .patch(`https://localhost:7095/api/Car/${updateObj.id}`, updateObj)
        .then(() => getCars().then(resolve))
        .catch(reject);
});

const deleteCar = (id) => new Promise((resolve, reject) => {
    axios
        .delete(`https://localhost:7095/api/Car/${id}`)
        .then(() => getCars().then(resolve))
        .catch(reject);
});

const getSingleCar = (id) => new Promise((resolve, reject) => {
    axios
        .get(`https://localhost:7095/api/Car/${id}`)
        .then((response) => {
            resolve(response.data);
        })
        .catch(reject);
});

export {
    getCars,
    createCar,
    updateCar,
    deleteCar,
    getSingleCar,
};