import { Route, Routes } from 'react-router'

import { useState } from 'react'

import Context from './context/Context'

import MainPage from './pages/MainPage'

import ListPage from './pages/ListPage'

import AddLinkPage from './pages/AddLinkPage'

function App() {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [dataFilter, setDataFilter] = useState([])
  const [status, setStatus] = useState({ button: false, dropdown: false })
  const Store = {
    data,
    setData,
    searchValue,
    setSearchValue,
    dataFilter,
    setDataFilter,
    status,
    setStatus
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
