import React from 'react';
import index from './index.css'
//creating a class that can use the methods of component class.
//this class can be called in app.js i.e. using its classname.
class BasicWebpage extends React.Component{
    //used to call Component class constructor and initialize state properties.
    constructor(props){
        super(props)
        //initial state of a property
        this.state ={
            user:'',
            pass:'',
            email:'',
            role:'',
        }
        //add this when we use normal functions.
        //this.submitData = this.submitData.bind(this);
    }
    //we cannot write all the state properties in a single setState method because one will dependent on other.
    //Arrow functions.We can also use normal functions instead of arrow functions.
    userData = (event) => {
        //used to change the value
        this.setState({
            user : event.target.value,
        })
    }
   passData = (event) => {
        this.setState({
            pass : event.target.value
        })
    }
    mailData = (event) => {
        this.setState({
            email : event.target.value
        })
    } 
    roleData = (event) => {
        this.setState({
            role : event.target.value
        })
    } 
    genderData = (event) =>{
        this.setState({
            gender : event.target.value
        })
    }
    // //normal function
    // submitData(event){
    //     document.write("Hi " + this.state.user + ".Account is created under the mail " + this.state.email + " for " + this.state.role + "role.");
    //     //alert(this.state.user + " " + this.state.pass + " " + this.state.email + " " + this.state.role + " " + this.state.gender);
        
    // }
    
    //to display anything using class we need to use render function which returns html.
    render(){
    return(
       <form action = "/retreivedata" method="post">
          <div>
            <label>Username:&nbsp;&nbsp;</label> 
            <input type="text" placeholder = "Username" name = "username" value={this.state.user} onChange={this.userData}></input><br></br><br></br>
            <label>Password:&nbsp;&nbsp;</label>
            <input type="password" placeholder = "password" name="password" value={this.state.pass} onChange={this.passData}></input><br></br><br></br>
            <label>Email:&nbsp;&nbsp;</label>
            <input type="email" placeholder = "email" name="email" value={this.state.email} onChange={this.mailData}></input><br></br><br></br>
            <label>Roles: &nbsp;&nbsp;</label>
            <select value = {this.state.role} onChange={this.roleData} name="role">
                <option value="FSE">FSE</option>
                <option value="CyberSecurity">CyberSecurity</option>
                <option value="AI">AI</option>
            </select> <br></br><br></br>
            <div className="radio">
                <input type="radio" value="Male" name = "gender" checked={this.state.gender === "Male"} onChange={this.genderData}></input>
                <label>Male</label>
                <input type="radio" value="Female" name = "gender" checked={this.state.gender === "Female"} onChange={this.genderData}></input>
                <label>Female</label>
            <br></br><br></br>
            </div>
            <button type="submit">Submit</button> <br></br> 
             </div>
            {/* this below data will be displayed whenever we start typing the particular field */}
            <div className="t1">
                <h3>Username : {this.state.user}</h3>
                <h3>Password : {this.state.pass}</h3>
                <h3>Email : {this.state.email}</h3>
                <h3>Role : {this.state.role}</h3>
                <h3>Gender : {this.state.gender}</h3>
            </div>
             {/* <h1>{val.name}</h1>  */}
        </form>
    );
    }
}

export default BasicWebpage;