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
      orderedItems: [],
      fieldsToInclude: {},
      meetingsToInclude: {}
    }
    this.updateData = this.updateData.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.updateFieldsToInclude = this.updateFiedsToInclude.bind(this);
    this.updateMeetingsToInclude = this.updateMeetingsToInclude.bind(this);
  }

  updateData(data) {
    const meetingsToInclude = {};
    const fieldsToInclude = {};
    data.map((item, index) => {
      for (var key in item.data) {
        fieldsToInclude[key] = true;
      }
      item.data['_id'] = index;
      meetingsToInclude[index] = true;
      return item;
    })
    this.setState({
      data: data,
      orderedItems: data,
      meetingsToInclude: meetingsToInclude,
      fieldsToInclude: fieldsToInclude
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

  updateMeetingsToInclude(id, bool) {
    let meetingsToInclude = this.state.meetingsToInclude;
    meetingsToInclude[id] = bool;
    console.log(meetingsToInclude);
    this.setState({
      meetingsToInclude: meetingsToInclude
    })
  }

  updateFiedsToInclude(field, bool) {
    let fieldsToInclude = this.state.fieldsToInclude;
    fieldsToInclude[field] = bool;
    this.setState({
      fieldsToInclude: fieldsToInclude
    })
  }

  render() {
    return (
      <>
        <CSVUpload updateData={this.updateData} />
        <MeetingList data={this.state.data} headers={this.state.headers} meetingsToInclude={this.state.meetingsToInclude} fieldsToInclude={this.state.fieldsToInclude} updateOrder={this.updateOrder} updateMeetingsToInclude={this.updateMeetingsToInclude} updateFieldsToInclude={this.updateFieldsToInclude}/>
        <Slides data={this.state.orderedItems} meetingsToInclude={this.state.meetingsToInclude} fieldsToInclude={this.state.fieldsToInclude} />
      </>
    );
  }
}



ReactDom.render(<App />, document.getElementById('app'));