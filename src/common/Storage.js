import AsyncStorage from '@react-native-community/async-storage';

export const storage_values = {
  email: 'email',
  password: 'password',
  fcmtoken: 'fcmtoken',
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

export const _fetchFCMToken = async () => {
  return AsyncStorage.getItem(storage_values.fcmtoken);
};

export const _storeFCMToken = async token => {
  return AsyncStorage.setItem(storage_values.fcmtoken, token);
};
