import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItemExternal from './CardItemExternal'

function Cards() {
  
  return (
    <div className='cards'>
      <h3>Take a few moments to visit CTQ’s Kelowna Mural Map!<br></br>Use the Mural Map to get started and find murals, and maybe you too can explore some of Kelowna’s hidden mural gems.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemExternal
              src='images/Spítləm Sisters.jpg'
              text='Explore the wonderful murals of Kelowna! Get directions and locate murals near you.'
              label='Mural Map'
              path='https://ctq.maps.arcgis.com/apps/instant/nearby/index.html?appid=3329ebbf0fa9454ea1b9a45ab269eb0a'
            />
            <CardItem
              src='images/survey123.jpg'
              text="If you see a mural that's not in this list or would like to submit a correction, click here!"
              label='Mural Submission'
              path='/survey'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
