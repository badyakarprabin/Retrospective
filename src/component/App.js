import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import Header from '../component/common/Header';
import GoodField from '../component/comments/Good';
import LastRetro from '../component/comments/LastRetro';
import ImprovementField from '../component/comments/Improvements';

class App extends Component {
  getProgressPercent = () => {
    const { data } = this.props;
    const isMoodChecked = data.mood.id ? 1 : 0;
    const isGoodSubmited = data.rows.good.isSubmitted ? 1 : 0;
    const isImprovementSubmitted = data.rows.improvements.isSubmitted ? 1 : 0;
    const calculateProgress = ((isMoodChecked + isGoodSubmited + isImprovementSubmitted) / 3) * 100;
    return calculateProgress;
  }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <Header className='header' />
          <div className='progressBar'>
            <ProgressBar active now={this.getProgressPercent()} />
          </div>
        </div>
        <LastRetro />
        <GoodField />
        <ImprovementField />
      </div >
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
})


export default connect(mapStateToProps)(App);
