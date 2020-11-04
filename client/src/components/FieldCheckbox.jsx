import React, {useState, useEffect} from 'react';

const FieldCheckbox = (props) => {
  const [checked, setChecked] = useState(props.fieldsToInclude[props.field]);

  useEffect(()=> {
    props.updateFieldsToInclude(props.field, checked);
  }, [checked])

  const handleCheckboxChange = () => {
    setChecked(!checked);
  }


  return (
    <th>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange}></input>
      {props.displayLabel}
    </th>

  );

}

export default FieldCheckbox