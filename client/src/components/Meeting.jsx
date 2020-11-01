import React from 'react';


const Meeting = (props) => {

const data = props.data;
const headers = props.headers;
const charLimits = [50, 50, 50, 50, 15, 300, 500, 500, 50];



const jsxArray = [];
for (var i = 0; i < headers.length; i++) {
  let styleObj = { border: 'none'};
  if (data[headers[i]].length > charLimits[i]) {
    styleObj = { border: '3px solid red'};
  }
  jsxArray.push(<div style={styleObj}>{data[headers[i]]}</div>);
}


return (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
    {jsxArray}
  </div>
);

}

export default Meeting