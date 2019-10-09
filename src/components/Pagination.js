import React, { useState, useContext }from 'react'

import { Consumer } from '../store'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Pagination = (props) => {

  const [selection, updateSelection]  = useState(null)

  const context = useContext(Consumer)

  const handleSelection = (e) => {
    props.func(false)
    if (e.target !== selection && props.reqEnded) {
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
