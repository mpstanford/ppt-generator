import React, {useState, useEffect} from 'react';

// const PresentationInfo = (props) => {
//   const [presentationName, setPresentationName] = useState('');
//   const [presentationTitle, setPresentationTitle] = useState('');
//   const [presentationSubtitle, setPresentationSubtitle] = useState('');

//   const handleChange = (e) => {

//   }

//   return (
//     <h1>presentation info goes here</h1>
//   );
// }

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
        <label>
          What should the file be called?
          <input
            name="presentationName"
            type="text"
            value={this.state.presentationName}
            onChange={this.handleChange} />
        </label>
          <br />
        <label>
            Presentation Title (first slide)
            <input
              name="presentationTitle"
              type="text"
              value={this.state.presentationTitle}
              onChange={this.handleChange} />
        </label>
          <br />
        <label>
            Presentation Subtitle (first slide)
            <input
              name="presentationSubtitle"
              type="text"
              value={this.state.presentationSubtitle}
              onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default PresentationInfo