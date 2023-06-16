import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'authUser';
const lngKey = 'lngKey';
const brandKey = 'brandKey';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    alert(e);
  }
};
const storeBrand = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(brandKey, jsonValue);
  } catch (e) {
    alert(e);
  }
};

const getBrand = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(brandKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    alert(e);
  }
};

const storeLng = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(lngKey, jsonValue);
  } catch (e) {
    alert(e);
  }
};

const getLng = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(lngKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

export {storeData, storeLng, getData, getLng, removeData, storeBrand, getBrand};
