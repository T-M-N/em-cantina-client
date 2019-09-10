import axios from 'axios';

const API_ENDPOINT = 'http://localhost:9000/api';

const errorHandler = (res) => {
    let errMessage = (res.response) ?
        `${res.response.statusText} : ${res.response.data.message}` :
        res.message;
    return Promise.reject(new Error(errMessage));
}

export default {
    fetchAll: function () {
        return axios.get(`${API_ENDPOINT}/recipes`)
            .then(res => { console.log(res); return res.data; })
            .catch(errorHandler)
    },

    addUser: function (userObj) {
        return axios.post(`${API_ENDPOINT}/recipes`, userObj)
            .then(res => res.data)
            .catch(errorHandler)
    },

    removeUser: function (userObj) {
        return axios.delete(`${API_ENDPOINT}/recipes/${userObj.id}`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    fetchOne: function (id) {
        return axios.get(`${API_ENDPOINT}/recipes/${id}`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    updateUser: function (userObj) {
        return axios.put(`${API_ENDPOINT}/recipes/${userObj.id}`, userObj)
            .then(res => res.data)
            .catch(errorHandler)
    }
}