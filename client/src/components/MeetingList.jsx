import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Meeting from './Meeting.jsx';
import FieldCheckbox from './FieldCheckbox.jsx';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: '5px',
  width: '100 vw'
});

const MeetingList = (props) => {

  const [items, setItems] = useState(props.data);

  useEffect(()=> {
    setItems(props.data);
  }, [props.data]);

  useEffect(()=> {
    props.updateOrder(items);
  }, [items]);

  const jsxArrayHeaders = ['Include?'];
  for (var item of props.headers) {
    jsxArrayHeaders.push(<FieldCheckbox field={item} fieldsToInclude={props.fieldsToInclude} updateFieldsToInclude={props.updateFieldsToInclude} />)
  }

  return (
    <DragDropContext onDragEnd={(result) => {
      if (!result.destination) {
        return;
      }

      const reorderedItems = reorder(
        items,
        result.source.index,
        result.destination.index
      );

      setItems(reorderedItems);
    }}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <table
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <thead>
              <tr>
              {jsxArrayHeaders}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <Meeting data={item.data} headers={props.headers} index={index} meetingsToInclude={props.meetingsToInclude} updateMeetingsToInclude = {props.updateMeetingsToInclude} updateContent={props.updateContent} />
              ))}
              {provided.placeholder}
            </tbody>
          </table>
          )
        }
      </Droppable>
    </DragDropContext>
  );
}

export default MeetingList