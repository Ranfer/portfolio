import axios from 'axios';

const KEY = 'AIzaSyDW3nwjkTKlnQvsnrapJRCJYtPnj5CmJgo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
