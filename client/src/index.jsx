import React from 'react';
import ReactDom from 'react-dom';
import Slides from './components/Slides.jsx';
import CSVUpload from './components/CSVUpload.jsx';
import MeetingList from './components/MeetingList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: []
    }
    this.updateData = this.updateData.bind(this);
  }

  updateData(data) {
    this.setState({
      data: data
    });

    if (data.length > 0) {
      this.setState({
        headers: Object.keys(data[0].data)
      });
    }
  }

  render() {
    return (
      <>
        <CSVUpload updateData={this.updateData} />
        <MeetingList data={this.state.data} headers={this.state.headers} />
        <Slides data={this.state.data} />
      </>
    );
  }
}



ReactDom.render(<App />, document.getElementById('app'));