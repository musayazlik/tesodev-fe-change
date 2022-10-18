import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

/** Context Api */
import Context from '../context/Context'

/* Style */

import '../assets/css/mainPage.css'

/* Image */
import MainPageLogo from '../assets/img/HomeLogo.png'
import SearchIcon from '../assets/icons/SearchIcon.svg'
import DropdownIcon from '../assets/icons/DropdownIcon.svg'

/* Components */
import Button from '../components/button/button'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'

const MainPage = () => {
  const { data, setData, searchValue, setSearchValue, dataFilter, setDataFilter, status, setStatus } = useContext(Context)

  const navigate = useNavigate()

  return (
    <>
      <header>
        <Button
          text='Add new record'
          customClass='buttonWrapper'
          onClick={() => {
            navigate('/add')
            setStatus({ button: false, dropdown: false })
          }}
        />
      </header>
      <main className='mainPageContext'>
        <div className='logoArea'>
          <img className='logo' src={MainPageLogo} alt='Google logo' />
          <span className='logo-text position-relative'>Search app</span>
        </div>
        <Search></Search>
      </main>
      <section className='container'>
        <h1 className='carouselTitle'>Top News</h1>
        <div style={{ display: 'flex' }} className=''>
          <Carousel />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MainPage
