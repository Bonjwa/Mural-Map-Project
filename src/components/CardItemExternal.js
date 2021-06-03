import React from 'react';

function CardItemExternal(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <a target='_blank' href='https://survey123.arcgis.com/share/8d1c357da5f345d185d3a5cbb60edff0/'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
            
              <img
                className='cards__item__img'
                alt='Murals'
                src={props.src}
              />
              
            </figure>
          </a>
          <div className='cards__item__info'>
            <a className='cards__item__info' target='_blank' href='https://survey123.arcgis.com/share/8d1c357da5f345d185d3a5cbb60edff0/'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItemExternal;
