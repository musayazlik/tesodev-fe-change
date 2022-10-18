import React, { useContext } from 'react'

/** Style */
import './AlertStyle.scss'

/** Image */
import Close from '../../assets/icons/Close.svg'

const Alert = ({ status, setStatus }) => {
  return (
    <div className='alert-model'>
      <div className='model'>
        <div className='model-header'>
          <a
            onClick={() => {
              setStatus(!status)
            }}
            type='button'
            className='close'
          >
            <img src={Close} alt='' />
          </a>
        </div>
        <div className='model-body'>
          <div className='model-text'>
            <h3>Error while adding link element</h3>
            <p>Name and surname should contain at least 2 words</p>
          </div>
          <button className='error'>Error</button>
        </div>
      </div>
    </div>
  )
}

export default Alert
