import request from 'request';
import axios from 'axios';

// Default to our localhost if env variable not found
// In future allows us to inject config, and we should switch this around to default to dev/etc
const API_DOMAIN = process.env.API_DOMAIN || 'http://localhost:8000';

const callApi = async ({ endpoint, options }) => axios({
    url: `${API_DOMAIN}/${endpoint}`,
    ...options,
  })

export default callApi;
