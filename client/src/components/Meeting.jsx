import React from 'react';


const Meeting = (props) => {

const data = props.data;
const headers = props.headers;

const jsxArray = [];
for (var i = 0; i < headers.length; i++) {
  jsxArray.push(<p>{data[headers[i]]}</p>);
}


return (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
    {jsxArray}
  </div>
);

}

export default Meeting