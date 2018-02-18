import Sortable from 'sortablejs';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import Header from '../component/common/Header';
import Report from '../component/comments/Report';
import GoodField from '../component/comments/Good';
import LastRetro from '../component/comments/LastRetro';
import ActionCourse from '../component/comments/ActionCourse';
import ImprovementField from '../component/comments/Improvements';



class App extends Component {
  getProgressPercent = () => {
    const { data } = this.props;
    const isMoodChecked = data.mood.id ? 1 : 0;
    const isGoodSubmited = data.rows.good.isSubmitted ? 1 : 0;
    const isImprovementSubmitted = data.rows.improvements.isSubmitted ? 1 : 0;
    const isCourseAction = data.rows.course.isSubmitted ? 1 : 0;
    const calculateProgress = ((isMoodChecked + isGoodSubmited + isImprovementSubmitted + isCourseAction) / 4) * 100;
    return calculateProgress;
  }
  componentDidMount() {

    const el = document.getElementById('listWithHandle');
    const el1 = document.getElementById('listWithHandle1');
    const el2 = document.getElementById('listWithHandle2');
    el && Sortable.create(el);
    el1 && Sortable.create(el1);
    el2 && Sortable.create(el2);
  }
  render() {
    const isCompleted = this.getProgressPercent() === 100;

    return (
      <div className='container'>
        <Header />
        <div className='progressBar'>
          {!isCompleted && <ProgressBar active now={this.getProgressPercent()} />}
        </div>
        {!isCompleted && <LastRetro />}
        {isCompleted && <Report />}
        {!isCompleted && <GoodField />}
        {!isCompleted && <ImprovementField />}
        {!isCompleted && <ActionCourse />}
      </div >
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
})


export default connect(mapStateToProps)(App);
