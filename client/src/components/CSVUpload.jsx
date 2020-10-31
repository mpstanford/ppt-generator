import React from 'react'

import { CSVReader } from 'react-papaparse'

class CSVUpload extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
    this.handleOnRemoveFile = this.handleOnRemoveFile.bind(this);
  }
  handleOnDrop(data) {
    this.props.updateData(data);
  }

  handleOnError(err, file, inputElem, reason) {
    console.log(err);
  }

  handleOnRemoveFile(data) {
    this.props.updateData([]);
  }

  render() {
    return (
      <CSVReader
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        onRemoveFile={this.handleOnRemoveFile}
        style={{}}
        config={{
          header: true
        }}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    )
  }
}
export default CSVUpload