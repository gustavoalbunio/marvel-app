import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  params: {
    ts: 1,
    apikey: '4493d18a915be5fff4bf8e6fec89ffb9',
    hash: '7ef8439dd522c150993aee29471ced87',
  },
});

export default api;
