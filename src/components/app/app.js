import React, { Component } from 'react';
import './app.css';

import ShopService from '../../services/shop-service';
import CourseList from '../course-list';
import SearchPanel from '../search-panel';
import TogglePrice from '../toggle-price/toggle-price';

class App extends Component {

  shopService = new ShopService();

  state = {
    data: null,
    filter: null,
    isSearched: false,
    togglePosition: 'rub'
  };

  componentDidMount() {
    this.shopService.getResourse()
      .then((data) => {
        this.setState({
          data: data.items
        })
      })
  };


  filterData = (filter) => {
    let isSearched = false;
    for (let key in filter) {
      if (filter[key]) {
        isSearched = true;
      }
    }

    this.setState({
      filter,
      isSearched
    });
  };

  onTogglePrice = (togglePosition) => {
    this.setState({
      togglePosition
    });
  };

  render() {

    const { data, filter, isSearched, togglePosition } = this.state;
    let filteredData;

    if (data && filter) {
      const { subject, genre, grade, searchText } = filter;

      filteredData = data.filter((item) => {
        if (subject)  {
          return subject === item.subject;
        } 
        return true;
      })
      .filter((item) => {
        if (genre) {
          return genre === item.genre;
        }
        return true;
      })
      .filter((item) => {
        if (grade) {
          return grade === item.grade;
        }
        return true;
      })
      .filter((item) => {
        if (searchText) {
          const itemSubject = item.subject.toLowerCase();
          return ~itemSubject.indexOf(searchText.toLowerCase());
        }
        return true;
      })
    } else {
      filteredData = data;
    }

    return (
      <main role="main">
        <div className="container">
          <header>
            <h3 className="header-title">Витрина</h3>
          </header>
          <TogglePrice position={togglePosition} onTogglePrice={this.onTogglePrice}/>
          <SearchPanel onFormSubmit={this.filterData} isSearched={isSearched}/>
          <CourseList data={filteredData} togglePosition={togglePosition}/>
        </div>
      </main>
    );
  };
};

export default App;