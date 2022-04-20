import axios from 'axios';

const getCars = () => new Promise((resolve, reject) => {
    axios.get('https://localhost:7095/api/Car', config)
        .then((response) => {
            resolve(Object.values(response.data));
        })
        .catch(reject);
});

export default getCars;