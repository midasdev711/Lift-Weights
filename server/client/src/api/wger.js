import axios from 'axios';

// create instance of axios with customized request headers, etc.
export default axios.create({
    baseURL: 'https://wger.de/api/v2',
    headers: {
        Authorization: 'Client-ID 135997a556d6d3ea3c529258417bddaf4f41e665'
    }  
});

