import { Route, Routes } from 'react-router'

import MainPage from './pages/MainPage'
import ListPage from './pages/ListPage'
import AddLinkPage from './pages/AddLinkPage'

function App() {
  return (
    <>
      <Routes path='/' element={<MainPage />}>
        <Route index element={<MainPage />} />
        <Route path='list' element={<ListPage />} />
        <Route path='add' element={<AddLinkPage />} />
      </Routes>
    </>
  )
}

export default App
