import React from 'react';
import Meeting from './Meeting.jsx';

const MeetingList = (props) => {

const jsxArrayData = [];
for (var item of props.data) {
  jsxArrayData.push(<Meeting data={item.data} headers={props.headers}/>)
}

const jsxArrayHeaders = [];
for (var item of props.headers) {
  jsxArrayHeaders.push(<p>item</p>)
}

return (
  <div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      {jsxArrayHeaders}
    </div>
    {jsxArrayData}
  </div>
);

}

export default MeetingList