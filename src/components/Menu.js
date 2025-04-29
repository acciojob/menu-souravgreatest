import React from 'react';
import '../styles/styles.css'

const Menu = ({ data }) => {
  return (
    <div className='container'>
      {data.map((item) => (
        <div className='card' key={item.id}>
          <div className='img'>
            <img src='https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg?auto=compress&cs=tinysrgb&w=600' alt={item.title} />
          </div>
          <div className='details'>
            <div className='title'>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
            <div className='desc'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
