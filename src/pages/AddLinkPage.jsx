import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../assets/css/addLinkPage.css'

/**
 * Image Imports
 */

import HeaderLogo from '../assets/img/PageLogo.png'
import ArrowLeft from '../assets/icons/ArrowLeft.svg'

const AddLinkPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='container'>
        <div className='row flex-column'>
          <header className='ListPageHeader'>
            <img className='logo' src={HeaderLogo} alt='Header alani logosudur' />

            <div
              className='ListPageHeader__Prev'
              onClick={() => {
                navigate('/')
              }}
            >
              <img src={ArrowLeft} alt='Arrow Icon' />
              <h2>Return to List Page</h2>
            </div>
          </header>
          <div className='context'>
            <form action=''>
              <div className='inputItem'>
                <label htmlFor='nameusername'> Name Username</label>
                <input id='nameusername' type='text' placeholder='Enter name and surname' />
              </div>
              <div className='inputItem'>
                <label htmlFor='country'> Country</label>
                <input id='country' type='text' placeholder='Enter a country' />
              </div>
              <div className='inputItem'>
                <label htmlFor='city'> City</label>
                <input id='city' type='text' placeholder='Enter a city' />
              </div>

              <div className='inputItem'>
                <label htmlFor='email'> Email</label>
                <input id='email' type='email' placeholder='Enter a e-mail (abc@xyz.com)' />
              </div>

              <div className='formButton'>
                <button> Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddLinkPage
