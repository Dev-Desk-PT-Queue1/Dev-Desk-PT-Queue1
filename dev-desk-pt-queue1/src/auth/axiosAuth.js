//This is an axios helper function to help with server authentication.
//It uses the JSON Web Token (JWT) in localStorage to authenticate the API endpoints

import axios from 'axios';

export default function() {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            Authoriztion: `${token}`
        }
    });
}