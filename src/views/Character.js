import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import api from '../api'

import Loader from '../components/Loader'
import Button from '../components/Button'

const Character = () => {

  const { id } = useParams()

  const [character, updateCharacter] = useState(null)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const fetchData = async () => {
    const characterReq = await api.character.get(id)
    updateCharacter(characterReq.data.data.results[0])
    console.log(characterReq.data.data.results[0])
  }

  return (
    <div>
      {
        character ? (
          <div className="row wrap">
            <div className="col mr-2" style={{width: 'auto'}}>
              <img
                className="character-thumb"
                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                alt={`marvel-${character.name}`}
              />
            </div>
            <div className="col" style={{width: '50%'}}>
              <h2 style={{fontWeight: 'bold', fontSize: 48}}>{character.name}</h2>
              <p>{character.description !== "" ? character.description : "No description"}</p>
              <div className="row">
              {
                character.urls.map((url, index) => (
                  <a className="mr-1" href={url.url} key={`${url.type}-${index}`} rel="noopener noreferrer" target="_blank">
                    <Button content={url.type} />
                  </a>
                ))
              }
              </div>
            </div>
          </div>
        ) : <Loader />
      }
    </div>
  )
}

export default Character
