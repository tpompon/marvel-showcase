import React, { useEffect, useState } from 'react'
import api from '../api'

import SuperCard from '../components/SuperCard'
import Pagination from '../components/Pagination'

const CharactersList = () => {

  const [characters, updateCharacters] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const characters = await api.characters.get()
    updateCharacters(characters.data.data.results)
  }

  return (
    <div>
      <Pagination />
      {
        characters ? (
            <div className="characters-list row center-h">
            {
              characters.map((character, index) => {
                return (
                  <SuperCard character={character} key={`character-${index}`} />
                )
              })
            }
            </div>
        ) : "Loading characters on API..."
      }
    </div>
  )
}

export default CharactersList
