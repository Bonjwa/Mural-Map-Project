import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItemExternal from './CardItemExternal'

function Cards() {
  
  return (
    <div className='cards'>
      <h3>Take a few moments to visit CTQ’s new Kelowna Mural Map!  Use the Mural Map to get started and find murals,<br></br> and maybe you too can explore some of Kelowna’s hidden mural gems.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemExternal
              src='https://www.ctqconsultants.ca/wp-content/uploads/2021/03/CTQ-MuralMap3-1024x576.jpg'
              text='Explore the wonderful murals of Kelowna! Get directions and locate murals near you'
              label='Mural Map'
              path='../applications/mural map/'
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
