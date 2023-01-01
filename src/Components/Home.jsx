import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../Redux/cryptoSlice';
import search from '../img/search.png';
import Navbar from './Navbar';

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
      <div className="">
        <div className="">
          <p className="">Here you can find</p>
          <p className="">
            Any information about crypto!
          </p>
        </div>
      </div>

      <div className="">
        <div className="">
          <span className="">
            <img src={search} alt="" />
          </span>
          <input
            className=""
            type="text"
            placeholder="Search here"
            value={searchcoin}
            onChange={onSearch}
            onFocus={onActive}
            onBlur={onInActive}
          />
        </div>
      </div>

      <div className="">
        {searched.map((asset, index) => (
          <Link
            className={`Cryptos__Item${(index + 1) % 4}`}
            key={asset.id}
            to={`crypto/${asset.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div className="">
              <div>
                <img className="" src={asset.icon} alt="" />
              </div>
            </div>
            <div className="">
              <p>
                Name:
                {' '}
                {asset.name}
              </p>
              <p className="">
                Symbol:
                {' '}
                {asset.symbol}
              </p>
              <p className="">
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
