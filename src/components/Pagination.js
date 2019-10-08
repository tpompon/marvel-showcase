import React from 'react'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Pagination = () => {
  return (
    <div className="row center-h">
      {
        alphabet.map(letter => {
          return (<div className="pagination-case">{letter}</div>)
        })
      }
    </div>
  )
}

export default Pagination
