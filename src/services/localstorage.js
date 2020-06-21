import {LOCALSTORAGE} from '../constants/constants';

const set = (key, value) => {
  window.localStorage[key] = value;
};

const get = (key) => {
  return window.localStorage[key] || null;
};

const setObject = (key, value) => {
  window.localStorage[key] = JSON.stringify(value);
};

const getObject = (key) => {
  return JSON.parse(window.localStorage[key] || null);
};

const remove = (key) => {
  window.localStorage.removeItem(key);
};

const reset = () => {
  window.localStorage.removeItem(LOCALSTORAGE.votingData);
};

export {set, get, setObject, getObject, remove, reset};
