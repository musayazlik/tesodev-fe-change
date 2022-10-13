import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import '../assets/css/mainPage.css'
import MainPageLogo from '../assets/img/HomeLogo.png'
import FooterImg from '../assets/img/FooterImg.png'
import SearchIcon from '../assets/icons/SearchIcon.svg'

/* Components */
import Button from '../components/button/button.jsx'

const MainPage = () => {
  const navigate = useNavigate()
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
        <div className='searchArea position-relative'>
          <form action=''>
            <label htmlFor='search'> Find in records</label>
            <div className='inputArea position-relative'>
              <input type='text' placeholder='Search' />
              <Button text='Search' />
              <div className='searchIcon'>
                <img src={SearchIcon} alt=' Search Icon' />
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='column-1'>
              <img src={FooterImg} alt=' Footer Image' />
            </div>
            <div className='column-2'>
              <address>
                <h3>İletişim</h3>
                <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03</p>
                <strong>
                  Email: <a href='mailto:bilgi@tesodev.com'>bilgi@tesodev.com</a>
                </strong>
              </address>
            </div>
            <div className='column-3'>
              <div id='map'></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MainPage
