import axios from 'axios';
const URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '200'
  },
  headers: {
    'x-rapidapi-key': '093196a06amsh0ccf49a6ba0a29cp1c7d0djsnc929252a89fa',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchfromapi = async(url)=>{
  const {data}= await axios.get(`${URL}/${url}`,options)
  return data;
}