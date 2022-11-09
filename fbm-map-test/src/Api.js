const axios = require('axios')

const postCodeApi = axios.create({
    baseURL:'https://findthatpostcode.uk/points/'
})

// export const pointsToData = (coords) => {
//     return postCodeApi.get('/')
// }