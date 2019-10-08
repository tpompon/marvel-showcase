import React, { useEffect, useState, useContext } from 'react'
import api from '../api'

import SuperCard from '../components/SuperCard'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

import { Consumer } from '../store'

const CharactersList = () => {

  const [characters, updateCharacters] = useState(null)

  const context = useContext(Consumer)
  const { pagination } = context

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    updateCharacters(null)
    fetchDataPagination()
  }, [pagination])

  const fetchData = async () => {
    const characters = await api.characters.get()
    updateCharacters(characters.data.data.results)
  }

  const fetchDataPagination = async () => {
    const characters = await api.charactersStartsWith.get(pagination)
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
        ) : <Loader />
      }
    </div>
  )
}

export default CharactersList
