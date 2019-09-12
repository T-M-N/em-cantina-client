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

    addRecipe: function (recipeObj) {
        return axios.post(`${API_ENDPOINT}/recipe`, recipeObj)
            .then(res => res.data)
            .catch(errorHandler)
    },

    removeRecipe: function (recipeObj) {
        return axios.delete(`${API_ENDPOINT}/recipe/${recipeObj.id}`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    fetchOne: function (id) {
        return axios.get(`${API_ENDPOINT}/recipe/${id}`)
            .then(res => res.data)
            .catch(errorHandler)
    },

    updateRecipe: function (recipeObj) {
        return axios.put(`${API_ENDPOINT}/recipe/${recipeObj.id}`, recipeObj)
            .then(res => res.data)
            .catch(errorHandler)
    }
}