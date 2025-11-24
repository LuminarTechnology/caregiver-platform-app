import AsyncStorage from '@react-native-async-storage/async-storage'

const storeToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('authToken', token)
  } catch (error) {
    console.log(error)
  }
}

const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem('authToken')
    return token
  } catch (error) {
    console.log(error)
    return null
  }
}

const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('authToken')
  } catch (error) {
    console.log(error)
  }
}

const storeIdentity = async (identity: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('identity', identity)
  } catch (error) {
    console.log(error)
  }
}

const getIdentity = async (): Promise<string | null> => {
  try {
    const identity = await AsyncStorage.getItem('identity')
    return identity
  } catch (error) {
    console.log(error)
    return null
  }
}

const removeIdentity = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('identity')
  } catch (error) {
    console.log(error)
  }
}

export {
  storeToken,
  getToken,
  removeToken,
  storeIdentity,
  getIdentity,
  removeIdentity
}
