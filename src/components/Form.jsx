import React from "react";

const Form = props => {

  const weightPlaceholder = props.countingSystem == "metric" ? "Weight in kgs" : "Weight in Pounds"
  const heightPlaceholder = props.countingSystem == "metric" ? "Height in cm" : "Height in Feet"

  return (
    <form onSubmit={props.onSubmitHandler}>

      <select name="countingSystem" id="select-method" 
        onChange={props.onChangeHandler}
      >
        <option name="metric" value="metric">Metric</option>
        <option name="imperial" value="imperial">Imperial</option>

      </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={weightPlaceholder}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder={heightPlaceholder}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;