import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import '../assets/css/mainPage.css'
import MainPageLogo from '../assets/img/HomeLogo.png'
import FooterImg from '../assets/img/FooterImg.png'

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
