/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../Redux/detailSlice';
import Navbar from './Navbar';

const Details = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(data.id));
  });
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <>
      <Navbar back />
      <div className="">
        <div className="">
          <img src={detail.icon} alt="" />
          <p>
            ~
            {formatter.format(
              Math.round(detail.price) === 0
                ? detail.price
                : Math.round(detail.price),
            )}
          </p>
        </div>
        <div className="">
          <div className="">
            <span>Coin name :</span>
            <span>{detail.name}</span>
          </div>
          <div className="">
            <span>Coin symbol :</span>
            <span>{detail.symbol}</span>
          </div>
          <div className="">
            <span>Ranking :</span>
            <span>{detail.rank}</span>
          </div>
          <div className="">
            <span>Price :</span>
            <span>
              {' '}
              {formatter.format(
                Math.round(detail.price) === 0
                  ? detail.price
                  : Math.round(detail.price),
              )}
            </span>
          </div>
          <div className="">
            <span> Coin Cap :</span>
            <span>
              {' '}
              {formatter.format(
                Math.round(detail.marketCap) === 0
                  ? detail.price
                  : Math.round(detail.marketCap),
              )}
            </span>
          </div>
          <div className="">
            <span> Price change hour :</span>
            <span> {detail.priceChange1h}</span>
          </div>
          <div className="">
            <span> Supply :</span>
            <span>
              ~
              {formatter.format(
                Math.round(detail.availableSupply) === 0
                  ? detail.price
                  : Math.round(detail.availableSupply),
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
