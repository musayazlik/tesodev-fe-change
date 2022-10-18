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
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1665995698155!5m2!1str!2str'
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
