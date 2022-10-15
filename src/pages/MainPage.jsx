import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

/* Style */

import '../assets/css/mainPage.css';

/* Image */
import MainPageLogo from '../assets/img/HomeLogo.png';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import DropdownIcon from '../assets/icons/DropdownIcon.svg';

/* Components */
import Button from '../components/button/button.jsx';
import Footer from '../components/Footer/Footer';

/* DB Url */
const dbserver = process.env.REACT_APP_DB_SERVER;

const MainPage = ({
  data,
  setData,
  searchValue,
  setSearchValue,
  dataFilter,
  setDataFilter
}) => {
  const [buttonStatus, setButtonStatus] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${dbserver}`).then((res) => {
      setData(res.data);
      setDataFilter(res.data);
    });
  }, []);

  const searchHandle = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (searchValue.length >= 2) {
      setDataFilter(
        data.filter((item) =>
          item.NameSurname.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setButtonStatus(true);
    } else {
      setDataFilter(data);
      setButtonStatus(false);
    }
  };

  return (
    <>
      <header>
        <Button
          text='Add new record'
          customClass='buttonWrapper'
          onClick={() => {
            navigate('/add');
          }}
        />
      </header>
      <main className='mainPageContext'>
        <div className='logoArea'>
          <img className='logo' src={MainPageLogo} alt='Google logo' />
          <span className='logo-text position-relative'>Search app</span>
        </div>
        <div className='searchArea position-relative'>
          <form action=''>
            <label htmlFor='search'> Find in records</label>
            <div className='inputArea position-relative'>
              <input
                id='search'
                type='text'
                placeholder='Search'
                onChange={(e) => {
                  searchHandle(e);
                }}
              />
              <Button
                text='Search'
                customClass={buttonStatus == true ? '' : 'buttonDisable'}
              />
              <div className='searchIcon'>
                <img src={SearchIcon} alt=' Search Icon' />
              </div>
            </div>
            <div className='dropdown position-absolute'>
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
                    );
                  })
                ) : (
                  <div className='dropdown-item'>
                    <div className='dropdown-item-context'>
                      <div className='dropdown-text'>
                        <b>Eleman Bulunamadı.</b>
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
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
