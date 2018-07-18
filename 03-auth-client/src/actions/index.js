import axios from 'axios';

import { AUTH_USER } from "./types";

export const signup = formProps => dispatch => {
    axios.post(`http://localhos:3090/signup`, formProps);
};