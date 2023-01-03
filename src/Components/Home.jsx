import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getData } from '../Redux/cryptoSlice';
import Navbar from './Navbar';
import '../style/Home.css';

function Home() {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.crypto);
  useEffect(() => {
    if (!assetList.length) {
      dispatch(getData());
    }
  });
  const [searchcoin, setSearchcoin] = useState('');
  const onSearch = (e) => {
    setSearchcoin(e.target.value);
  };
  const searched = assetList.filter(
    (filteredCoin) => filteredCoin.name.toLowerCase()
      .includes(searchcoin.toLowerCase()) || filteredCoin.symbol.toLowerCase()
      .includes(searchcoin.toLowerCase()),
  );

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const onActive = (e) => {
    e.target.placeholder = '';
  };

  const onInActive = (e) => {
    e.target.placeholder = 'WHAT ARE YOU LOOKING FOR?';
  };
  return (
    <>
      <Navbar />
      <div className="Header-home">
        <div className="Header-container">
          <p className="Header-title">Here you can find</p>
          <p className="Header-info">
            Any information about crypto!
          </p>
        </div>
      </div>
      <div className="search">
        <div className="search-container">
          <span className="search-icon">
            <BsSearch />
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search here"
            value={searchcoin}
            onChange={onSearch}
            onFocus={onActive}
            onBlur={onInActive}
          />
        </div>
      </div>

      <div className="cards">
        {searched.map((asset) => (
          <Link
            className="card-item"
            key={asset.id}
            to={`crypto/${asset.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="imgContainer">
              <div>
                <img className="img-crypto" src={asset.icon} alt="" />
              </div>
            </div>
            <div className="details">
              <p>
                Name:
                {' '}
                {asset.name}
              </p>
              <p>
                Symbol:
                {' '}
                {asset.symbol}
              </p>
              <p className="pricing">
                Current Price: ~
                {formatter.format(
                  Math.round(asset.price) === 0
                    ? asset.price
                    : Math.round(asset.price),
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
