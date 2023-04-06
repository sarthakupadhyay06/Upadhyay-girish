import React from 'react'
import { MdMiscellaneousServices } from 'react-icons/md'
import './Card.css'

const Card = ({tag,src,info}) => {
  return (
    <div className='container'>
      <div class="card">
        <div class="tag">{tag}</div>
        <div class="pic">
          <img src={src} alt="Tax" />
        </div>
        <div class="info">{info}
        </div>
      </div>
    </div>
  )
}

export default Card