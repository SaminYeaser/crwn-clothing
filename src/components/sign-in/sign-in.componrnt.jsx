import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../components/firebase/firebase.utils'


import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault()

        const { email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }catch(error){
            console.log(error)
        }
        
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
                    <div className='buttons'>
                        <CustomButton type="submit" value='Submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SignIn