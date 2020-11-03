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
      headers: [],
      orderedItems: []
    }
    this.updateData = this.updateData.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
  }

  updateData(data) {
    data.map((item, index) => {
      item.data['_id'] = index;
      return item;
    })
    this.setState({
      data: data,
      orderedItems: data
    });

    if (data.length > 0) {
      this.setState({
        headers: Object.keys(data[0].data)
      });
    }
  }

  updateOrder(items) {
    this.setState({
      orderedItems: items
    })
  }

  render() {
    return (
      <>
        <CSVUpload updateData={this.updateData} />
        <MeetingList data={this.state.data} headers={this.state.headers} updateOrder={this.updateOrder}/>
        <Slides data={this.state.orderedItems} />
      </>
    );
  }
}



ReactDom.render(<App />, document.getElementById('app'));