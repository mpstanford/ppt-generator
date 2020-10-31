import React from 'react';
import ReactDom from 'react-dom';
import Slides from './components/Slides.jsx';
import CSVUpload from './components/CSVUpload.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CSVUpload />
        <Slides />
      </>
    );
  }
}



ReactDom.render(<App />, document.getElementById('app'));