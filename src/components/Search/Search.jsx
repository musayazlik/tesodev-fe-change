import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Context from '../../context/Context'

import Button from '../button/button'

import './SearchStyle.scss'

/* Image */
import MainPageLogo from '../../assets/img/HomeLogo.png'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import DropdownIcon from '../../assets/icons/DropdownIcon.svg'

const Search = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { data, setData, searchValue, setSearchValue, dataFilter, setDataFilter, status, setStatus } = useContext(Context)

  /** Data filtering process. */
  const searchHandle = (e) => {
    e.preventDefault()
    const searchValue = e.target.value
    if (searchValue.length >= 2) {
      setDataFilter(data.filter((item) => item.nameSurname.toLowerCase().includes(searchValue.toLowerCase())))
      setStatus({ button: true, dropdown: true })
    } else {
      setDataFilter(data)
      setStatus({ button: false, dropdown: false })
    }
  }

  return (
    <div className='searchArea position-relative'>
      <form action=''>
        {location.pathname === '/' ? <label htmlFor='search'> Find in records</label> : ''}
        <div className='inputArea position-relative'>
          <input
            id='search'
            type='text'
            placeholder='Search'
            onChange={(e) => {
              searchHandle(e)
            }}
          />
          <Button
            text='Search'
            customClass={status.button === true ? '' : 'buttonDisable'}
            onClick={() => {
              navigate('/list')
            }}
          />
          <div className='searchIcon'>
            <img src={SearchIcon} alt=' Search Icon' />
          </div>
        </div>

        {location.pathname === '/' ? (
          <div className={`dropdown position-absolute ${status.dropdown ? 'd-block' : 'd-none'}`}>
            <div className='dropdown-content'>
              {dataFilter.length > 0 ? (
                location.pathname === '/' ? (
                  dataFilter.slice(0, 3).map((item, index) => {
                    return (
                      <div key={index} className='dropdown-item'>
                        <div className='dropdown-item-context'>
                          <div className='dropdown-icon'>
                            <img src={DropdownIcon} alt='Search Icon' />
                          </div>
                          <div className='dropdown-text'>
                            <b>{item.nameSurname}</b>
                            <p>{item.country}</p>
                          </div>
                        </div>
                        <span className='line'></span>
                      </div>
                    )
                  })
                ) : (
                  data.map((item, index) => {
                    return (
                      <div key={index} className='dropdown-item'>
                        <div className='dropdown-item-context'>
                          <div className='dropdown-icon'>
                            <img src={DropdownIcon} alt='Search Icon' />
                          </div>
                          <div className='dropdown-text'>
                            <b>{item.nameSurname}</b>
                            <p>{item.country}</p>
                          </div>
                        </div>
                        <span className='line'></span>
                      </div>
                    )
                  })
                )
              ) : (
                <div className='dropdown-item'>
                  <div className='dropdown-item-context'>
                    <div className='dropdown-text'>
                      <b
                        onClick={() => {
                          navigate('/list')
                          setStatus({ button: true, dropdown: false })
                        }}
                        className='notfound'
                      >
                        Search not found.
                      </b>
                    </div>
                  </div>
                  <span className='line'></span>
                </div>
              )}

              <div className='showMore'>
                <b
                  onClick={() => {
                    navigate('/list')
                    setStatus({ button: true, dropdown: false })
                  }}
                >
                  Show more...
                </b>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default Search
