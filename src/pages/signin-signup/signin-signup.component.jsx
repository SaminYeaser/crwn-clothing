import React from 'react'
import SignIn from '../../components/sign-in/sign-in.componrnt'
import SignUp from '../../components/sign-up/sign-up.component'

import './signin-signup.style.scss'

const SignInSignup = ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignup