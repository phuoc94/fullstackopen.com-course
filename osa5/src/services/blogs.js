import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id.id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const config = {
        headers: { Authorization: token },
    }

    const request = axios.delete(`${baseUrl}/${id.id}`, config)
    return request.then(response => response.data)
}

// eslint-disable-next-line
export default { getAll, create, update, setToken, remove }