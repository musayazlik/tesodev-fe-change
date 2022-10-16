import React from 'react'
import { useNavigate } from 'react-router-dom'
import { id } from 'nanoid'

import '../assets/css/addLinkPage.css'

/**
 * Image Imports
 */

import HeaderLogo from '../assets/img/PageLogo.png'
import ArrowLeft from '../assets/icons/ArrowLeft.svg'
import { useId } from 'react'
import { nanoid } from 'nanoid'

const AddLinkPage = () => {
  const navigate = useNavigate()

  const addLink = (e) => {
    e.preventDefault()

    const NameSurname = e.target.nameusername.value
    const Country = e.target.country.value
    const Company = e.target.company.value
    const City = e.target.city.value
    const Email = e.target.email.value
    const id = nanoid()
    const Datee = new Date().toLocaleString().split(',')[0]

    const data = {
      id,
      NameSurname,
      Company,
      Email,
      Datee,
      Country,
      City
    }

    fetch('http://localhost:3005/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate('/')
      })
  }

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
            <form
              onSubmit={(e) => {
                addLink(e)
              }}
            >
              <div className='inputItem'>
                <label htmlFor='nameusername'> Name Username</label>
                <input id='nameusername' type='text' name='nameusername' placeholder='Enter name and surname' />
              </div>
              <div className='inputItem'>
                <label htmlFor='country'> Country</label>
                <input id='country' name='country' type='text' placeholder='Enter a country' />
              </div>
              <div className='inputItem'>
                <label htmlFor='company'> Company</label>
                <input id='company' name='company' type='text' placeholder='Enter a company' />
              </div>
              <div className='inputItem'>
                <label htmlFor='city'> City</label>
                <input id='city' name='city' type='text' placeholder='Enter a city' />
              </div>

              <div className='inputItem'>
                <label htmlFor='email'> Email</label>
                <input id='email' type='email' name='email' placeholder='Enter a e-mail (abc@xyz.com)' />
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
