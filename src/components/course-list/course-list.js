import React, { Component } from 'react';
import './course-list.css';

import CourseListItem from '../course-list-item';

class CourseList extends Component {

  render() {

    const { data, togglePosition } = this.props;

    console.log(data);

    if (!data) {
      return <h3>loading...</h3>
    }

    const elements = data.map((item) => {

      const { courseId } = item;

      return (
        <li key={courseId}>
          <CourseListItem data={item} togglePosition={togglePosition}/>
        </li>
      );
    });

    return (
      <ul className="course-list">
        {elements}
      </ul>
    );
  };
}

export default CourseList;