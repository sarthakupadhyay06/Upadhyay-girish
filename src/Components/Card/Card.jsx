import React from 'react'
import { MdMiscellaneousServices } from 'react-icons/md'

const Card = ({tag,color}) => {
  return (
    <div className='container'>
        <div className='container'>
    <div className="card">
      <div className="icon">
        <MdMiscellaneousServices />
      </div>
      <div className="tag" style={{color:{color}}}>{tag}</div>
      <div className="button">Read More ... 
      </div>
    </div>
</div>

    </div>
  )
}

export default Card