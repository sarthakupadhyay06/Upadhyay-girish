import React from 'react'
import './Card.css'

const Card = ({tag,src,info}) => {
  return (
      <div class="card">
        <div class="tag">{tag}</div>
        <div class="pic">
          <img src={src} alt="Tax" />
        </div>
        <div class="info">{info}
        </div>
      </div>
  )
}

export default Card