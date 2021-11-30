import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            redirect:false
        }
    }
 compmonentDidMount(){

 }
 componentDidUpdate(){

 }
 inputHandler=(e)=>{
     this.setState({[e.target.name]:e.target.value})
}
submitButton=async()=>{

}
    render() {
        const{name,email,phone}=this.state
        const {redirect}=this.state;
        if(redirect){
            // return <Redirect to='/home'/>;
        }
        return (
            <div>
                    <form>
            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="name" value={this.inputField.name} onChange={this.inputHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.inputField.email} onChange={this.inputHandler}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="phone" value={this.inputField.phone} onChange={this.inputHandler} />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        );
    }
}

export default EditUser;