import axios from "axios"

const apiVersion = "v1"
const apiKey = "8c7bfcc599d5a3d13aa3e27b76fa8058"
const apiURI = `http://gateway.marvel.com/${apiVersion}`

const requests = {
  charactersStartsWith: {
    get: (string, offset) => axios.get(`${apiURI}/public/characters?nameStartsWith=${string}&offset=${offset}&apikey=${apiKey}`)
  },
  character: {
    get: (id) => axios.get(`${apiURI}/public/characters/${id}?apikey=${apiKey}`)
  }
}

export default requests
