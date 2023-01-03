/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../Redux/detailSlice';
import Navbar from './Navbar';
import '../style/Details.css';

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
      <div className="Detail-container">
        <div className="Detail-icon">
          <img className="detail-icon-coin" src={detail.icon} alt="" />
          <p>
            ~
            {formatter.format(
              Math.round(detail.price) === 0
                ? detail.price
                : Math.round(detail.price),
            )}
          </p>
        </div>
        <br /> <br /> <br />
        <div className="Detail">
          <div className="detail-background">
            <span><b>Coin name :</b></span>
            <span>{detail.name}</span>
          </div>
          <div className="detail-background">
            <span><b>Coin symbol :</b></span>
            <span>{detail.symbol}</span>
          </div>
          <div className="detail-background">
            <span><b>Ranking :</b></span>
            <span>{detail.rank}</span>
          </div>
          <div className="detail-background">
            <span><b>Price :</b></span>
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
            <span> <b>Coin Cap :</b></span>
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
            <span> <b>Price change hour :</b></span>
            <span> {detail.priceChange1h}</span>
          </div>
          <div className="">
            <span> <b>Supply :</b></span>
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
