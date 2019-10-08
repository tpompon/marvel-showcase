import React from 'react';
import { Link } from "react-router-dom"
import Button from './Button'

const SuperCard = ({ character }) => {
  return (
    <div className="character-card">
      <img
        className="character-icon"
        src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
        alt={`marvel-${character.name}`}
      />
      <div style={{padding: 20}}>
        <h3 className="character-name" style={{marginBottom: 20}}>{character.name}</h3>
        <p style={{marginBottom: 80}}>{character.description !== "" ? character.description : "No description"}</p>
        <Link to={`/character/${character.id}`}>
          <Button content="Show more" style={{ position: 'absolute', right: 10, bottom: 10 }} />
        </Link>
      </div>
    </div>
  )
}

export default SuperCard;
