import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import MeetingCheckbox from './MeetingCheckbox.jsx';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});

const Meeting = (props) => {

  const data = props.data;
  const headers = props.headers;
  const charLimits = [50, 50, 50, 50, 15, 300, 500, 500, 50];

  const jsxArray = [];
  for (var i = 0; i < headers.length; i++) {
    let styleObj = { border: 'none', width: `${Math.floor(100/headers.length)}vw`};
    if (data[headers[i]].length > charLimits[i]) {
      styleObj = { border: '3px solid red'};
    }
    jsxArray.push(<td style={styleObj}>{data[headers[i]]}</td>);
  }
  return (
    <Draggable key={props.data._id} draggableId={`${props.data._id}`} index={props.index}>
      {(provided, snapshot) => (
        <tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <MeetingCheckbox id={data._id} meetingsToInclude={props.meetingsToInclude} updateMeetingsToInclude = {props.updateMeetingsToInclude}/>
          {jsxArray}
        </tr>
        )
      }
    </Draggable>
  );

}

export default Meeting