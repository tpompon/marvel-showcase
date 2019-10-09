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
              <h2 className="mb-2" style={{fontWeight: 'bold', fontSize: 48}}>{character.name}</h2>
              <p className="mb-2">{character.description !== "" ? character.description : "No description"}</p>
              <div className="col mb-2">
                <h3 className="title-category mb-2">Comics</h3>
                <ul>
                {
                  character.comics && character.comics.items.length > 0 ? (
                    character.comics.items.map((item, index) => (
                      <li className="mb-1" key={`comics-item-${index}`}>{item.name}</li>
                    ))
                  ) : <p>No entries</p>
                }
                </ul>
              </div>
              <div className="col mb-2">
                <h3 className="title-category mb-2">Series</h3>
                <ul>
                {
                  character.series && character.series.items.length > 0 ? (
                    character.series.items.map((item, index) => (
                      <li className="mb-1" key={`series-item-${index}`}>{item.name}</li>
                    ))
                  ) : <p>No entries</p>
                }
                </ul>
              </div>
              <div className="col mb-2">
                <h3 className="title-category mb-2">Stories</h3>
                <ul>
                {
                  character.stories && character.stories.items.length > 0 ? (
                    character.stories.items.map((item, index) => (
                      <li className="mb-1" key={`stories-item-${index}`}>{item.name}</li>
                    ))
                  ) : <p>No entries</p>
                }
                </ul>
              </div>
              <div className="col mb-2">
                <h3 className="title-category mb-2">Events</h3>
                <ul>
                {
                  character.events && character.events.items.length > 0 ? (
                    character.events.items.map((item, index) => (
                      <li className="mb-1" key={`events-item-${index}`}>{item.name}</li>
                    ))
                  ) : <p>No entries</p>
                }
                </ul>
              </div>
              <div className="row mt-2">
              {
                character.urls.map((url, index) => (
                  <a className="mr-1" href={url.url} key={`${url.type}-${index}`} rel="noopener noreferrer" target="_blank">
                    <Button content={url.type} className="capitalize" />
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
