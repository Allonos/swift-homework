import Api from './api'

export const getUsers = async (page, size) => {
  try {
    const res = await Api.get(`user/${page}/${size}`)
    return res;
  } catch (err) {
    throw new Error(err)
  }
}
export const getUserFriends = async (userId, page, size) => {
  try {
    const res = await Api.get(`user/${userId}/friends/${page}/${size}`)
    return res;
  } catch (err) {
    throw new Error(err)
  }
}

export const getSingleUser = async (userId) => {
  try {
    const res = await Api.get(`user/${userId}`)
    return res;
  } catch (err) {
    throw new Error(err)
  }
}

export default { getUsers }