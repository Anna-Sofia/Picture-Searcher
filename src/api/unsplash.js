import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID 97fca4a595f11dd6e28d8a757c6e620e32ec63c9a156fd7c364fe9e2a2da620b'
        }
});