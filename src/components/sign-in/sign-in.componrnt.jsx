import React from 'react'

import FormInput from '../form-input/form-input.component'

import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event =>{
        event.preventDefault()

        this.setState({email:'', password:''})
    }
    handleChange = event =>{
        const{name, value} = event.target
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already Have an Account</h2>
                <span>
                    Sign in  with your email and password
                </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' onChange={this.handleChange} value={this.state.email} type='email' label='email' required/>
                    
                    <FormInput name='password' value={this.state.password} type='password' onChange={this.handleChange} label='pasword' required/>
                    
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
}
export default SignIn