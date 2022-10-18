import React, { useState, useEffect, useContext } from 'react'
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

  const [pagination, setPagination] = useState({ currentPage: 1, dataPerPage: 5 })
  const totalPage = Math.ceil(dataFilter.length / pagination.dataPerPage - 1)

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

  const paginationPage = (page) => {
    setPagination({ ...pagination, currentPage: page })
    console.log(page)
  }

  const paginationArea = () => {
    const items = []
    let threePoints = true
    for (let number = 1; number <= totalPage; number++) {
      if (number <= 3 || number >= totalPage - 2 || (number >= pagination.currentPage - 1 && number <= pagination.currentPage + 1)) {
        items.push(
          <li key={number} className={`page-item ${pagination.currentPage === number ? 'active' : ''}`}>
            <a
              className='page-link'
              onClick={() => {
                paginationPage(number)
              }}
            >
              {number}
            </a>
          </li>
        )
      } else {
        if (threePoints === true) {
          items.push(
            <li key={number} className='page-item threePoints'>
              <a className='page-link'>...</a>
            </li>
          )
          threePoints = false
        }
      }
    }
    return items
  }

  const paginationNext = () => {
    if (pagination.currentPage < totalPage) {
      setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })
    } else {
      setPagination({ ...pagination, currentPage: totalPage })
    }
  }

  const paginationPrev = () => {
    if (pagination.currentPage > 1) {
      setPagination({ ...pagination, currentPage: pagination.currentPage - 1 })
    } else {
      setPagination({ ...pagination, currentPage: 1 })
    }
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
              dataFilter.slice(pagination.currentPage * pagination.dataPerPage, pagination.dataPerPage * (pagination.currentPage + 1)).map((item, index) => {
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

            <nav aria-label='navigation'>
              <ul className='pagination'>
                <li className='page-item previous'>
                  <a
                    className='page-link'
                    onClick={() => {
                      paginationPrev()
                    }}
                  >
                    Previous
                  </a>
                </li>

                {paginationArea()}

                <li className='page-item next'>
                  <a
                    onClick={() => {
                      paginationNext()
                    }}
                    className='page-link'
                    href='#'
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
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
