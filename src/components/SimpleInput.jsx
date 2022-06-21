import { useEffect,useState } from "react";

const SimpleInput = (props) => {

  const [enteredName,setEnteredName]=useState('');
  const [enteredNameisValid,setEnteredNameIsValid]=useState(false);
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);
  const [formIsValid,setFormIsValid]=useState(false);
  useEffect(()=>{
    if (!enteredNameisValid){
      setFormIsValid(false);
    }else{
      setFormIsValid(true)
    }
  },[enteredNameisValid])

  function nameInputChangeHandler(event){
    setEnteredName(event.target.value);
    if(enteredName.trim()!==""){
      setEnteredNameIsValid(true);
    }
  }

  function formSubmissionHandler(event){
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim()===""){
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("");
  }

  const nameInputIsInvalid=!enteredNameisValid && enteredNameTouched;
  const inputClasses= nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} /> */}
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className="error-text">Name is field is empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
