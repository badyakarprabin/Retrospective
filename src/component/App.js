import React, { Component } from 'react';

import GoodField from '../component/comments/Good';
import ImprovementField from '../component/comments/Improvements';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <GoodField />
        <ImprovementField />
      </div >
    );
  }
}

export default App;
