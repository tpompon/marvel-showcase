import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import api from '../api'

const Character = () => {

  const { id } = useParams();

  const [character, updateCharacter] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const characterReq = await api.character.get(id)
    updateCharacter(characterReq.data.data.results[0])
  }

  return (
    <div>
      {
        character ? (
          <div>
            {character.name}
            <img
              src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
              alt={`marvel-${character.name}`}
            />
            <p>{character.description}</p>
          </div>
        ) : "Loading character"
      }
    </div>
  )
}

export default Character
