import axios from 'axios';
import { getToken } from '../authManager';

const dbUrl = 'https://localhost:7095/api/buyers';

const getBuyers = () => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
        .get(`${dbUrl}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => resolve(response.data))
        .catch(reject);
    });
});

const getBuyer = (firebaseUserId) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
        .get(`${dbUrl}/${firebaseUserId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => resolve(response.data))
        .catch(reject);
    });
});

// const createBuyer = (buyer) => new Promise((resolve, reject) => {
//     axios
//         .post(dbUrl, buyer)
//         .then((response) => {
//             const id = response.data.name;
//             axios
//                 .patch(dbUrl, { id })
//                 .then(() => getBuyers().then(resolve))
//         })
//         .catch(reject);
// });
const createBuyer = (buyer) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
        .post(dbUrl, buyer, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => resolve(response.data))
        .catch(reject);
    });
});

const updateBuyer = (buyer) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
        .patch(`${dbUrl}/${buyer.firebaseUserId}`, buyer, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => getBuyers().then(resolve))
        .catch(reject);
    });
});

const deleteBuyer = (buyer) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
        .delete(`${dbUrl}/${buyer.firebaseUserId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => getBuyers().then(resolve))
        .catch(reject);
    });
});

export {
    getBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer
}
