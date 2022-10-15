import React from 'react'

/*Image */

import FooterImg from '../../assets/img/FooterImg.png'

const Footer = () => {
  return (
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
  )
}

export default Footer
