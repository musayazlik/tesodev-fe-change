import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { id } from 'nanoid'

/** Context Api */
import Context from '../context/Context'

import '../assets/css/addLinkPage.css'

/**
 * Image Imports
 */

import HeaderLogo from '../assets/img/PageLogo.png'
import ArrowLeft from '../assets/icons/ArrowLeft.svg'
import { useId } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'

const AddLinkPage = () => {
  const navigate = useNavigate()

  const { data, setData } = useContext(Context)
  const addLink = (e) => {
    e.preventDefault()

    const id = nanoid()
    const nameSurname = e.target.nameusername.value
    const company = e.target.company.value
    const email = e.target.email.value
    const date = new Date().toLocaleString().split(',')[0]
    const country = e.target.country.value
    const city = e.target.city.value

    const newData = {
      id,
      nameSurname,
      company,
      email,
      date,
      country,
      city
    }

    axios.post('http://localhost:3005/data', newData).then((res) => {
      console.log(res)
      navigate('/')
      setData([...data, newData])
    })
  }

  return (
    <>
      <div className='container'>
        <div className='row flex-column'>
          <header className='ListPageHeader'>
            <Link to={'/'}>
              <img className='logo' src={HeaderLogo} alt='Header alani logosudur' />
            </Link>

            <Link to={'/list'}>
              <div className='ListPageHeader__Prev'>
                <img src={ArrowLeft} alt='Arrow Icon' />
                <h2>Return to List Page</h2>
              </div>
            </Link>
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
