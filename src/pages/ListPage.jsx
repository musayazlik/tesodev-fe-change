import React from 'react'

import '../assets/css/listPage.css'

/**
 * Image Imports
 */

import HeaderLogo from '../assets/img/PageLogo.png'
import ArrowLeft from '../assets/icons/ArrowLeft.svg'

const ListPage = () => {
  return (
    <>
      <header className='ListPageHeader'>
        <img src={HeaderLogo} alt='Header alani logosudur' />

        <div className='ListPageHeader__Prev'>
          <img src={ArrowLeft} alt='Arrow Icon' />
          <h2>Return to List Page</h2>
        </div>
      </header>
    </>
  )
}

export default ListPage
