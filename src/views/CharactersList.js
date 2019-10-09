import React, { useEffect, useState, useContext } from 'react'
import api from '../api'

import SuperCard from '../components/SuperCard'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

import { Consumer } from '../store'

const CharactersList = () => {

  const [characters, updateCharacters] = useState(null)
  const [offset, updateOffset] = useState(0)
  const [reqEnded, setReqEnded] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [maxOffsetReached, setMaxOffsetReached] = useState(false)

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
    updateOffset(0)
    fetchData()
    // eslint-disable-next-line
  }, [pagination])

  useEffect(() => {
    if (characters) {
      setReqEnded(true)
      setLoadingMore(false)
    }
    // eslint-disable-next-line
  }, [characters])

  useEffect(() => {
    const loadMore = async () => {
      const charactersReq = await api.charactersStartsWith.get(pagination, offset)
      if (charactersReq.data.data.results && characters)
        updateCharacters(prevArray => ([ ...prevArray, ...charactersReq.data.data.results ]))
      if (charactersReq.data.data.results.length < 20)
        setMaxOffsetReached(true)
    }

    if (!maxOffsetReached) {
      setLoadingMore(true)
      loadMore()
    }
    // eslint-disable-next-line
  }, [offset])

  const handleScroll = () => {
    const limit = document.body.offsetHeight - window.innerHeight;

    if (window.scrollY === limit)
      updateOffset(prevOffset => prevOffset + 20)
  }

  const fetchData = async () => {
    const characters = await api.charactersStartsWith.get(pagination)
    updateCharacters(characters.data.data.results)
  }

  return (
    <div>
      <Pagination reqEnded={ reqEnded } func={ setReqEnded } />
      {
        characters ? (
          <div>
            <div className="characters-list row center-h">
            {
              characters.map((character, index) => (
                <SuperCard character={character} key={`character-${index}`} />
              ))
            }
            </div>
            { loadingMore ? <div className="mb-3" style={{textAlign: 'center'}}>Loading...</div> : null }
          </div>
        ) : <Loader />
      }
    </div>
  )
}

export default CharactersList
