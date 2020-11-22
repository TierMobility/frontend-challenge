import { isURL } from 'validator';

export const validateURL = str => isURL(str);
