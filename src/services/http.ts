import axios from 'axios';

const BASE_URL = 'https://6652aa2c813d78e6d6d5f9c7.mockapi.io/api/v1';

export const Http = axios.create({
  baseURL: BASE_URL,
});
