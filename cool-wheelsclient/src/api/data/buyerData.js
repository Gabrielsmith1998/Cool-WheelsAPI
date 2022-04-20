import axios from 'axios';

const dbUrl = 'https://localhost:7095/api/buyers';

const getBuyers = () => new Promise((resolve, reject) => {
     axios
         .get(`${dbUrl}`)
        .then((response) => {
            if (response.data) {
                resolve(Object.values(response.data));
            } else {
                resolve([]);
            }
        }).catch(reject);
});

export default getBuyers;