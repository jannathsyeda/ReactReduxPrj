import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect,params,match} from 'react-router-dom';
import { userInfo } from '../Redux/AllAction';
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
    
    componentDidMount(){
      this.props.getUserDetail(this.props.match.params.id);
      console.log(this.props,this.props.match.params.id);
 }
 componentDidUpdate(){
   console.log(this.props.myUser)
  if(this.state.name == ''){
    const {name,email,phone}=this.props.myUser.user;
    this.setState({
      name:name,
      email:email,
      phone:phone
    })
  }
 }
 inputHandler=(e)=>{
     this.setState({[e.target.name]:e.target.value})
}
// submitButton=async(e)=>{
//   console.log(this.state);
//   let newData= Object.assign(this.props.myUser.user,this.state)
//   console.log(newData);
// }
    render() {
        const{name,email,phone}=this.state
        const {redirect}=this.state;
        if(redirect){
            // return <Redirect to='/home'/>;
        }
        return (
            <div>
                    <form className="container mt-4">
            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="name" value={this.state.name} onChange={this.inputHandler} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.inputHandler}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="phone" value={this.state.phone} onChange={this.inputHandler} />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  type="button" class="btn btn-primary">Update</button>
</form>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
  return{
    myUser:state.user
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getUserDetail:(id)=>{dispatch(userInfo(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUser);