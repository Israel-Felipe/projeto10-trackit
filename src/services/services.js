import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const user = JSON.parse(localStorage.getItem("user"));
    const authAPI = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
    return authAPI;
}

function cadastrar (cadastroAPI) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, cadastroAPI);
    return promise;
}

function logar (loginAPI) {
    const promise = axios.post(`${BASE_URL}/auth/login`, loginAPI);
    return promise;
}

function postHabito (postHabitoBody) {
    const authAPI = createHeaders();
    const promise = axios.post(`${BASE_URL}/habits`, postHabitoBody, authAPI);
    return promise;
}

function deleteHabito (idHabito) {
    const authAPI = createHeaders();
    const promise = axios.delete(`${BASE_URL}/habits/${idHabito}`, authAPI);
    return promise;
}

function listaHabitos () {
    const authAPI = createHeaders();
    const promise = axios.get(`${BASE_URL}/habits`, authAPI);
    return promise;
}

function listaHabitosHoje () {
    const authAPI = createHeaders();
    const promise = axios.get(`${BASE_URL}/habits/today`, authAPI);
    return promise;
}

function checkHabito (idHabito) {
    const authAPI = createHeaders();
    const body = {};
    const promise = axios.post(`${BASE_URL}/habits/${idHabito}/check`, body, authAPI);
    return promise;
}

function uncheckHabito (idHabito) {
    const authAPI = createHeaders();
    const body = {};
    const promise = axios.post(`${BASE_URL}/habits/${idHabito}/uncheck`, body, authAPI);
    return promise;
}

export {cadastrar, logar, postHabito, deleteHabito, listaHabitos, listaHabitosHoje, checkHabito, uncheckHabito}
