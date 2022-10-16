import React, { useContext } from 'react'

import Context from '../../context/Context'

import Button from '../button/button'

/* Image */
import MainPageLogo from '../../assets/img/HomeLogo.png'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import DropdownIcon from '../../assets/icons/DropdownIcon.svg'

const Search = () => {
  const { data, setData, searchValue, setSearchValue, dataFilter, setDataFilter, status, setStatus } = useContext(Context)

  /** Data filtering process. */
  const searchHandle = (e) => {
    e.preventDefault()
    const searchValue = e.target.value
    if (searchValue.length >= 2) {
      setDataFilter(data.filter((item) => item.NameSurname.toLowerCase().includes(searchValue.toLowerCase())))
      setStatus({ button: true, dropdown: true })
    } else {
      setDataFilter(data)
      setStatus({ button: false, dropdown: false })
    }
  }

  return (
    <div className='searchArea position-relative'>
      <form action=''>
        <label htmlFor='search'> Find in records</label>
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
        <div className={`dropdown position-absolute ${status.dropdown ? 'd-block' : 'd-none'}`}>
          <div className='dropdown-content'>
            {dataFilter.length > 0 ? (
              dataFilter.slice(0, 3).map((item, index) => {
                return (
                  <div key={index} className='dropdown-item'>
                    <div className='dropdown-item-context'>
                      <div className='dropdown-icon'>
                        <img src={DropdownIcon} alt='Search Icon' />
                      </div>
                      <div className='dropdown-text'>
                        <b>{item.NameSurname}</b>
                        <p>{item.Country}</p>
                      </div>
                    </div>
                    <span className='line'></span>
                  </div>
                )
              })
            ) : (
              <div className='dropdown-item'>
                <div className='dropdown-item-context'>
                  <div className='dropdown-text'>
                    <b className='notfound'>Search not found.</b>
                  </div>
                </div>
                <span className='line'></span>
              </div>
            )}

            <div className='showMore'>
              <b>Show more...</b>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search
