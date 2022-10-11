import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import '../assets/css/mainPage.css'
import MainPageLogo from '../assets/img/HomeLogo.png'

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <header>
        <div className='buttonWrapper'>
          <button
            onClick={() => {
              navigate('/add')
            }}
            className='HeaderButton'
          >
            Add new record
          </button>
        </div>
      </header>
      <main>
        <div className='logoArea'>
          <img className='logo' src={MainPageLogo} alt='Google logo' />
          <span className='logo-text position-relative'>Search app</span>
        </div>
      </main>
    </>
  )
}

export default MainPage
