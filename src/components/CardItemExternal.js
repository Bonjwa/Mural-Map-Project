import React from 'react';
import { Link } from 'react-router-dom';

function CardItemExternal(props) {
  return (
    <>
      <li className='cards__item'>
        <Link target="_parent" className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Murals'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemExternal;
