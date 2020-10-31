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
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  handleOnError(err, file, inputElem, reason) {
    console.log(err)
  }

  handleOnRemoveFile(data) {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  render() {
    return (
      <CSVReader
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    )
  }
}
export default CSVUpload