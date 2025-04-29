import React from 'react';
import '../styles/styles.css';

const Menu = ({ data }) => {
  return (
    <div className='container'>
      {data.map((item) => (
        <div
          className='card'
          key={item.id}
          data-test-id={`menu-item-${item.category}`}
        >
          <div className='img'>
            <img src={item.img} alt={item.title} />
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
