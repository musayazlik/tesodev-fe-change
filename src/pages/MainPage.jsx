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

/* DB Url */
const dbserver = process.env.REACT_APP_DB_SERVER

const MainPage = () => {
  const { data, setData, searchValue, setSearchValue, dataFilter, setDataFilter, status, setStatus } = useContext(Context)

  const navigate = useNavigate()

  /** The function from which the data is retrieved. */
  useEffect(() => {
    axios.get(`${dbserver}/data`).then((res) => {
      setData(res.data)
      setDataFilter(res.data)
    })
  }, [])

  return (
    <>
      <header>
        <Button
          text='Add new record'
          customClass='buttonWrapper'
          onClick={() => {
            navigate('/add')
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
      <div style={{ display: 'flex' }} className=''>
        <Carousel />
      </div>
      <Footer />
    </>
  )
}

export default MainPage
