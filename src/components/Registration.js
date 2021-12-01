import React,{useState} from 'react';
import shortid from 'shortid'
const Registration = () => {
    const[inputField,setinputField]=useState({
        name:'',
        email:'',
        phone:'',
    })
    const inputHandler=(e)=>{
        setinputField( {...inputField, [e.target.name]:e.target.value })
    }

console.log(inputField)


    const submitButton =  (e)=>{
          //  e.preventDefault()
      Object.assign(inputField,{id:shortid.generate()})
         console.log(inputField);
    }
    return (
      <div className="container mt-4">
            <form>
            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="name" value={inputField.name} onChange={inputHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={inputField.email} onChange={inputHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" id="exampleInputPassword1" onChange={inputHandler} name="phone" value={inputField.phone} />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button onClick={submitButton} type="button" class="btn btn-primary">Register</button>
</form>
        </div>
    );
};

export default Registration;