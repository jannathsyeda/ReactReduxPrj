import React,{useState} from 'react';

const Registration = () => {
    const[inputField, setinputField]=useState({
        name:'',
        email:'',
        phone:''
    })
    const inputHandler=(e)=>{
        setinputField({...inputField,[e.target.name]:e.target.value})
    }

    const submitButton=async()=>{

    }
    return (
        <div>
            <form>
            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="name" value={inputField.name} onChange={inputHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={inputField.email} onChange={inputHandler}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="phone" value={inputField.phone} onChange={inputHandler} />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Registration;