import React from 'react';
import './course-list-item.css';

const CourseListItem = ({ data, togglePosition }) => {

  const { genre, grade, subject, price, priceBonus, courseId } = data;

  const priceView = togglePosition === 'rub' ? `${price} руб.` : `${priceBonus}`;

  const imageUrl = `https://www.imumk.ru/svc/coursecover/${courseId}`;

  let trGrade = grade.split(';');

  if (trGrade.length > 2) {
    trGrade.splice(1, trGrade.length - 2);
  }

  trGrade = trGrade.join('-') + (trGrade.length > 1 ? ' классы' : ' класс');

  return (
    <div className="cousre-list-item">
      <div className="item-cover">
        <img src={imageUrl} alt="Демо-версия"/>
      </div>
      <div className="item-info">
        <div className="item-title">{subject}</div>
        <div className="item-grade">{trGrade}</div>
        <div className="item-genre">{genre}</div>
        <div className="item-link">
          <a href="/">Подробнее</a>
        </div>
        <button className="item-btn">{priceView}</button>
      </div>
    </div>
  )
}

export default CourseListItem;