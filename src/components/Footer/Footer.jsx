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
            <div id='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.8179916994404!2d30.51142101521133!3d39.78863977944307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15ef9fca93fd%3A0x4168480ce0e769f4!2zQmFow6dlbGlldmxlciwgR8O2a2JlbiBTay4sIDI2MTcwIFRlcGViYcWfxLEvRXNracWfZWhpcg!5e0!3m2!1str!2str!4v1665945601610!5m2!1str!2str'
                width='400'
                height='200'
                style={{ border: 0 }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
