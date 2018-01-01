import React, { Component } from 'react';
import Header from '../component/common/Header';
import GoodField from '../component/comments/Good';
import LastRetro from '../component/comments/LastRetro';
import ImprovementField from '../component/comments/Improvements';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <Header className='header' />
        </div>
        <LastRetro />
        <GoodField />
        <ImprovementField />
      </div >
    );
  }
}

export default App;
