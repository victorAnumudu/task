import { React, useState } from "react";

import InputForm from "./InputForm";
import Label from "./Label";
import ButtonAdd from "./ButtonAdd";
import { FormWrapper, FormFieldset } from "./styles/Form.style";

const Form = ({ showform, addtask }) => {
  // state declaration
  let [inputTask, setInputTask] = useState("");
  let [inputDate, setInputDate] = useState("");
  let [inputTime, setInputTime] = useState("");

  // function to handle when input change
  let inputChangeHandler = (e) => {
    let input = e.target;
    if (input.type === "text") {
      setInputTask(input.value);
    }
    if (input.type === "date") {
      setInputDate(input.value);
    }
    if (input.type === "time") {
      setInputTime(input.value);
    }
  };

  // process input and add to tasks array
  let processInputToAddToArray = (e) => {
    e.preventDefault();
    let task = {task: inputTask, date: inputDate, time: inputTime};
    if(inputTask === '' || inputDate === '' || inputTime === ''){
      alert('Opps! Please fill all inputs')
    }else{
      addtask(task);
      setInputTask("");
      setInputDate("");
      setInputTime('');
    }
  };
  return (
    <FormWrapper
      showform={showform}
      onSubmit={(e) => processInputToAddToArray(e)}
    >
      <FormFieldset>
        <legend>Please Enter Task!</legend>
        <Label text="Enter Task"></Label>
        <InputForm
          type="text"
          value={inputTask}
          onchange={inputChangeHandler}
        />
        <Label text="Enter Date"></Label>
        <InputForm
          type="date"
          value={inputDate}
          min="2022-09-01"
          onchange={inputChangeHandler}
        />
        <Label text="Enter Time"></Label>
        <InputForm
          type="time"
          value={inputTime}
          onchange={inputChangeHandler}
        />
      </FormFieldset>
      <ButtonAdd
        text="+"
        color="#fff"
        bg="var(--green)"
        hover="var(--dark-green)"
      />
    </FormWrapper>
  );
};

export default Form;
