import axios from 'axios';

const dbUrl = 'https://localhost:7095/api/buyers';

const getBuyers = () => new Promise((resolve, reject) => {
     axios
        .get(dbUrl)
        .then((response) => {
            if (response.data) {
                resolve(Object.values(response.data));
            } else {
                resolve([]);
            }
        }).catch(reject);
});

const getBuyer = (id) => new Promise((resolve, reject) => {
    axios
        .get(`${dbUrl}/${id}`)
        .then((response) => resolve(response.data))
        .catch(reject);
});

const createBuyer = (buyer) => new Promise((resolve, reject) => {
    axios
        .post(dbUrl, buyer)
        .then((response) => {
            const id = response.data.name;
            axios
                .patch(dbUrl, { id })
                .then(() => getBuyers().then(resolve));
        });
});

const updateBuyer = (buyer) => new Promise((resolve, reject) => {
    axios
        .patch(dbUrl, buyer)
        .then(() => getBuyers().then(resolve))
        .catch(reject);
});

const deleteBuyer = (buyer) => new Promise((resolve, reject) => {
    axios
        .delete(dbUrl)
        .then(() => getBuyers().then(resolve))
        .catch(reject);
});

export {
    getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer
}
