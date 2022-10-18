import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

/** Context */
import Context from './context/Context'

/** Components */
import MainPage from './pages/MainPage'
import ListPage from './pages/ListPage'
import AddLinkPage from './pages/AddLinkPage'

/* DB Url */
const dbserver = process.env.REACT_APP_DB_SERVER

function App() {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [dataFilter, setDataFilter] = useState([])
  const [status, setStatus] = useState({ button: false, dropdown: false, orderDropDown: false, orderDropDownText: 'Order By' })
  const [orderDropDown, setOrderDropDown] = useState({ status: false, order: 'asc', orderBy: 'Order By' })

  /** The function from which the data is retrieved. */
  useEffect(() => {
    axios.get(`${dbserver}/data`).then((res) => {
      setData(res.data)
      setDataFilter(res.data)
    })
  }, [])

  const Store = {
    data,
    setData,
    searchValue,
    setSearchValue,
    dataFilter,
    setDataFilter,
    status,
    setStatus,
    orderDropDown,
    setOrderDropDown
  }

  return (
    <>
      <Context.Provider value={Store}>
        <Routes path='/' element={<MainPage />}>
          <Route index element={<MainPage />} />
          <Route path='list' element={<ListPage />} />
          <Route path='add' element={<AddLinkPage />} />
        </Routes>
      </Context.Provider>
    </>
  )
}

export default App
