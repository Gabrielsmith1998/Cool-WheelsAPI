import axios from 'axios';

const getTracks = () => new Promise((resolve, reject) => {
    axios.get('https://localhost:7095/api/tracks')
        .then((response) => {
            resolve(Object.values(response.data));
        })
        .catch(reject);
});

export default getTracks;