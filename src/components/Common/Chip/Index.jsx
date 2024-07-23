import React from 'react'
import './Styles.css';
const Chip = ({label}) => {
  return (
    <div className='chip'>
        <p>{label}</p>
    </div>
  )
}

export default Chip