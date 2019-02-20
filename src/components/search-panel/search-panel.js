import React, { Component, Fragment } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

  state = {
    subject: '',
    genre: '',
    grade: '',
    searchText: ''
  }

  changeFilter = (event) => {
    const newState = {...this.state};

    if (event.target.value === 'all') {
      newState[event.target.name] = '';
    } else {
      newState[event.target.name] = event.target.value;
    }

    this.setState(newState);
    this.props.onFormSubmit(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  }

  render() {

    const { isSearched } = this.props;

    return (
      <Fragment>
        <form className="search-panel" onSubmit={this.onFormSubmit}>
          <div className="">
            <select name="subject" onChange={this.changeFilter}>
              <option value="all">Все предметы</option>
              <option>Алгебра</option>
              <option>Английский язык</option>
              <option>Биология</option>
              <option>География</option>
              <option>Геометрия</option>
              <option>Демо-версия</option>
              <option>Информатика</option>
              <option>История</option>
              <option>Литература</option>
              <option>Математика</option>
              <option>Обществознание</option>
              <option>Окружающий мир</option>
              <option>Робототехника</option>
              <option>Русский язык</option>
              <option>Физика</option>
              <option>Химия</option>
            </select>
          </div>

          <div className="">
            <select 
              name="genre" 
              onChange={this.changeFilter}
            >
              <option value="all">Все жанры</option>
              <option>Демо</option>
              <option>Задачник</option>
              <option>Подготовка к ВПР</option>
              <option>Подготовка к ЕГЭ</option>
              <option>Рабочая тетрадь</option>
            </select>
          </div>

          <div className="">
            <select 
              name="grade" 
              onChange={this.changeFilter}
            >
              <option value="all">Все классы</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
            </select>
          </div>

          <div className="search">
            <input 
              type="text" 
              name="searchText" 
              placeholder="Поиск"
              value={this.state.searchText}
              onChange={this.changeFilter}
            />
            <button type="submit"></button>
          </div>
        </form>
        <div className="search-results">
          {isSearched ? 'Результаты поиска:' : null}
        </div>
      </Fragment>
    );
  }
};

export default SearchPanel;