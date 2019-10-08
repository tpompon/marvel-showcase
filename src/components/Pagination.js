import React, { useState, useContext }from 'react'

import { Consumer } from '../store'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Pagination = () => {

  const [selection, updateSelection]  = useState(null)

  const context = useContext(Consumer)

  const handleSelection = (e) => {
    if (e.target !== selection) {
      e.target.classList.add('pagination-case-enabled')
      context.updatePagination(e.target.innerHTML)
      if (selection)
        selection.classList.remove('pagination-case-enabled')
      updateSelection(e.target)
    }
  }

  return (
    <div className="row center-h">
      {
        alphabet.map(letter => {
          return (
            <div className="pagination-case" onClick={e => handleSelection(e)} key={letter}>
              {letter}
            </div>
          )
        })
      }
    </div>
  )
}

export default Pagination
