
import axios from 'axios';

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://localhost:3333',

});

export const apiViaCep = axios.create({ baseURL: 'https://viacep.com.br/ws/' });
