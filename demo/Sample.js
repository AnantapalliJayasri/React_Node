import React from 'react';
//import axios from 'axios';
//import {Navigate} from 'react-router-dom'
class Sample extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            user:'',
            pass:'',
        }
        //we need to include this when we are using normal functions.
        this.userData = this.userData.bind(this);
        this.passData = this.passData.bind(this);
    }
    //Normal function.
    userData(event){
        //used to change the value
        this.setState({
            user : event.target.value,
        })
    }
    passData(event){
        //used to change the value
        this.setState({
            pass : event.target.value,
        })
    }
    
    //to display anything using class we need to use render function which returns html.
    render(){
    return(
       <form action="/data" method="post">
            <label>Username:&nbsp;&nbsp;</label> 
            <input type="text" name = "username" value={this.state.user} onChange={this.userData}></input><br></br><br></br>
            <label>Password:&nbsp;&nbsp;</label> 
            <input type="password" name = "password" value={this.state.pass} onChange={this.passData}></input><br></br><br></br>

            <button type="submit">Submit</button>
            
            {/* this below data will be displayed whenever we start typing the particular field */}
            <h3>{this.state.user}</h3>
        </form>
    );
    }
}

export default Sample;