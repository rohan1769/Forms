import { useState } from "react";

const useInput = (validateValue) => {
  //this paramater is recieving a function as its value
  const [enteredValue, setEnteredValue] = useState(""); //we need this component function to set these hooks
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const valueChangeHandler = (event) => {
    //inputchange handler function to check if the input is valid or not
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    // blur handler function for the situation f the user ghost the input without entering anything
    setIsTouched(true);
  };
  const resetFunction = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetFunction, //exposing the function so that they can be called from a place where the hooks have been ussed
  };
};
export default useInput;
