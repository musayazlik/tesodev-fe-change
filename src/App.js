import { Route, Routes } from 'react-router';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import AddLinkPage from './pages/AddLinkPage';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [dataFilter, setDataFilter] = useState([]);

  return (
    <>
      <Routes path='/' element={<MainPage />}>
        <Route
          index
          element={
            <MainPage
              data={data}
              setData={setData}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              dataFilter={dataFilter}
              setDataFilter={setDataFilter}
            />
          }
        />
        <Route path='list' element={<ListPage />} />
        <Route path='add' element={<AddLinkPage />} />
      </Routes>
    </>
  );
}

export default App;
