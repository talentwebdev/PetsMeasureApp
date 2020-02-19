import {AsyncStorage} from 'react-native';

export const storage_values = {
  email: 'email',
  password: 'password',
};

export const _storeEmail = async email => {
  return AsyncStorage.setItem(storage_values.email, email);
};
export const _fetchEmail = async () => {
  return AsyncStorage.getItem(storage_values.email);
};

export const _storePassword = async password => {
  return AsyncStorage.setItem(storage_values.password, password);
};
export const _fetchPassword = async () => {
  return AsyncStorage.getItem(storage_values.password);
};

export const _initStorage = async () => {
  return AsyncStorage.clear();
};
