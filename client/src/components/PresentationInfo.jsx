import React, {useState, useEffect} from 'react';

class PresentationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presentationName: '',
      presentationTitle: '',
      presentationSubtitle: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.props.updatePresentationInfo(this.state);
    });
  }

  render() {
    return (
      <form>
        <label>What should the file be called?</label>
        <input
          name="presentationName"
          type="text"
          value={this.state.presentationName}
          onChange={this.handleChange} />

        <br />
        <label>Presentation Title (first slide): </label>
        <input
          name="presentationTitle"
          type="text"
          value={this.state.presentationTitle}
          onChange={this.handleChange} />

          <br />
        <label>Presentation Subtitle (first slide):</label>
        <input
          name="presentationSubtitle"
          type="text"
          value={this.state.presentationSubtitle}
          onChange={this.handleChange} />

      </form>
    );
  }
}

export default PresentationInfo