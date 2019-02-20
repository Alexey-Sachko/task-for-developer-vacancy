import React from 'react';
import './toggle-price.css';

const TogglePrice = ({ position, onTogglePrice }) => {

  const rubClassName = position === 'rub' ? 'active' : '';
  const bonusClassName = position === 'bonus' ? 'active' : '';

  return (
    <div className="toggle-price">
      <button 
        type="button" 
        className={rubClassName}
        onClick={() => onTogglePrice('rub')}
      >
        Рубли
      </button>

      <button 
        type="button" 
        className={bonusClassName}
        onClick={() => onTogglePrice('bonus')}
      >
        Бонусы
      </button>
    </div>
  );
}

export default TogglePrice;