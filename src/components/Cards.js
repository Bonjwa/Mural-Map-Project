import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItemExternal from './CardItemExternal'

function Cards() {
  return (
    <div className='cards'>
      <h3>Take a few moment to visit CTQ’s new Kelowna's GIS Mural Map, use the locator or enjoy a guided tour, and maybe you too can explore some of Kelowna’s hidden mural gems.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.ctqconsultants.ca/wp-content/uploads/2021/03/CTQ-MuralMap2-1024x576.jpg'
              text='Explore the wonderful murals of kelowna'
              label='Mural Guide'
              path='../applications/guide/'
            />
            <CardItem
              src='https://www.ctqconsultants.ca/wp-content/uploads/2021/03/CTQ-MuralMap3-1024x576.jpg'
              text='Get directions to murals and locate closest murals to you'
              label='Mural Locator'
              path='../applications/locator/'
            />
            <CardItemExternal
              src='images/img-3.jpg'
              text="If you see a mural that's not in this list or would like to submit a correction, click here!"
              label='Mural Submission'
              path='https://www.ctqconsultants.ca/wp-content/uploads/2021/03/CTQ-MuralMap3-1024x576.jpg'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
