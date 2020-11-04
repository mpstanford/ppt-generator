import React, {useState, useEffect} from 'react';

const MeetingCheckbox = (props) => {
  const [checked, setChecked] = useState(props.meetingsToInclude[props.id]);

  useEffect(()=> {
    props.updateMeetingsToInclude(props.id, checked);
  }, [checked])

  const handleCheckboxChange = () => {
    setChecked(!checked);
  }


  return (
    <input type="checkbox" checked={checked} onChange={handleCheckboxChange}></input>
  );

}

export default MeetingCheckbox