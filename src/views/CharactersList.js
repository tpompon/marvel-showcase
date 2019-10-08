import React, { useEffect, useState, useContext } from 'react'
import api from '../api'

import SuperCard from '../components/SuperCard'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

import { Consumer } from '../store'

const CharactersList = () => {

  const [characters, updateCharacters] = useState(null)
  const [offset, updateOffset] = useState(0)

  const context = useContext(Consumer)
  const { pagination } = context

  useEffect(() => {
    fetchData()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    updateCharacters(null)
    fetchData()
    // eslint-disable-next-line
  }, [pagination])

  const handleScroll = () => {
    const limit = document.body.offsetHeight - window.innerHeight;

    if (window.scrollY === limit)
      loadMoreCharacters()
  }

  const fetchData = async () => {
    const characters = await api.charactersStartsWith.get(pagination)
    updateCharacters(characters.data.data.results)
  }

  const loadMoreCharacters = async () => {
    updateOffset(prevOffset => prevOffset + 20)

    const charactersReq = await api.charactersStartsWith.get(pagination, "20") // replace with offset
    updateCharacters(prevArray => ([ ...prevArray, ...charactersReq.data.data.results ]))
  }

  return (
    <div>
      <Pagination />
      {
        characters ? (
            <div className="characters-list row center-h">
            {
              characters.map((character, index) => (
                <SuperCard character={character} key={`character-${index}`} />
              ))
            }
            </div>
        ) : <Loader />
      }
    </div>
  )
}

export default CharactersList
