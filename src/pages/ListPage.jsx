import React, { useEffect, useContext } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

/** Context */
import Context from '../context/Context'

/** Style */
import '../assets/css/listPage.css'

/** Components */
import Search from '../components/Search/Search'
import Button from '../components/button/button'

/** Image */
import HeaderLogo from '../assets/img/PageLogo.png'
import ArrowLeft from '../assets/icons/ArrowLeft.svg'
import DropdownIcon from '../assets/icons/DropdownIcon.svg'
import orderImg from '../assets/icons/Sort.svg'

const ListPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { dataFilter, setDataFilter, status, setStatus, filterDropDownText, filterDropDown, orderDropDown, setOrderDropDown } = useContext(Context)

  if (orderDropDown.order === 'nameAsc') {
    setDataFilter(dataFilter.sort((a, b) => a.nameSurname.localeCompare(b.nameSurname)))
  } else if (orderDropDown.order === 'nameDesc') {
    setDataFilter(dataFilter.sort((a, b) => b.nameSurname.localeCompare(a.nameSurname)))
  } else if (orderDropDown.order === 'yearAsc') {
    const order = dataFilter.sort((a, b) => {
      const beforeDate = new Date(a.date.split('/')[2] + '-' + a.date.split('/')[1] + '-' + a.date.split('/')[0])
      const afterDate = new Date(b.date.split('/')[2] + '-' + b.date.split('/')[1] + '-' + b.date.split('/')[0])
      return beforeDate - afterDate
    })
    setDataFilter(order)
  } else if (orderDropDown.order === 'yearDesc') {
    const order = dataFilter.sort((a, b) => {
      const beforeDate = new Date(a.date.split('/')[2] + '-' + a.date.split('/')[1] + '-' + a.date.split('/')[0])
      const afterDate = new Date(b.date.split('/')[2] + '-' + b.date.split('/')[1] + '-' + b.date.split('/')[0])
      return afterDate - beforeDate
    })
    setDataFilter(order)
  } else {
  }

  return (
    <>
      <div className='container'>
        <header className='ListPageHeader'>
          <div className='logoSearch'>
            <Link to={'/'}>
              <img src={HeaderLogo} alt='Header alani logosudur' />
            </Link>
            <Search />
          </div>
          <Button
            text='Add new record'
            customClass='buttonWrapper'
            onClick={() => {
              navigate('/add')
            }}
          />
        </header>

        <main className='listMain'>
          <div className='col-left'>
            {dataFilter?.length > 0 ? (
              dataFilter.map((item, index) => {
                return (
                  <div key={index} className='list-item'>
                    <div className='list-item-context'>
                      <div className='col-left'>
                        <div className='list-icon'>
                          <img src={DropdownIcon} alt='Search Icon' />
                        </div>
                        <div className='list-text-one'>
                          <b>{item.company}</b>
                          <p>{item.country}</p>
                        </div>
                      </div>
                      <div className='list-text-two text-end'>
                        <b>{item.nameSurname}</b>
                        <p>{item.date}</p>
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
          </div>
          <div className='col-right'>
            <div className='order'>
              <div className='orderButton'>
                <button onClick={() => setOrderDropDown({ ...orderDropDown, status: !orderDropDown.status })}>
                  <img src={orderImg} alt='Order Icon' />
                  {orderDropDown.orderBy}
                </button>
              </div>
              {orderDropDown.status === true ? (
                <div className='orderList'>
                  <ul>
                    <li onClick={() => setOrderDropDown({ ...orderDropDown, status: false, orderBy: 'Name ascending', order: 'nameAsc' })}>Name ascending</li>
                    <li onClick={() => setOrderDropDown({ ...orderDropDown, status: false, orderBy: 'Name descending', order: 'nameDesc' })}>Name descending</li>
                    <li onClick={() => setOrderDropDown({ ...orderDropDown, status: false, orderBy: 'Year ascending', order: 'yearAsc' })}>Year ascending</li>
                    <li onClick={() => setOrderDropDown({ ...orderDropDown, status: false, orderBy: 'Year descending', order: 'yearDesc' })}>Year descending</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default ListPage
